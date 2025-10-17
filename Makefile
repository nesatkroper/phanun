# DEV_COMMAND := ./node_modules/.bin/concurrently --kill-others-on-fail -n "B,F" -c "blue,green" "php artisan serve --port=8105" "npm run dev" "bash -c 'while true; do sleep 1; done'"

# .PHONY: dev git clear migrate m-seed model setup controller component service middleware request resource view

# Default port and host
p ?= 8122
h ?= 127.0.0.1

DEV_COMMAND := ./node_modules/.bin/concurrently --kill-others-on-fail -n "B,F" -c "blue,green" \
	"php artisan serve --host=$(h) --port=$(p)" \
	"npm run dev" \
	"bash -c 'while true; do sleep 1; done'"

.PHONY: dev git clear migrate m-seed model setup controller component service middleware request resource view

# DEVELOPMENT SECTION (Laravel)
setup:
	@echo "================================================="
	@echo "🛠️ Starting Project Setup..."
	@echo "-------------------------------------------------"
	@echo "--- 1. Running Composer Update..."
	@composer update
	@echo "--- 2. Running NPM Install..."
	@npm install
	@echo "--- 3. Copying .env.example to .env..."
	@cp .env.example .env
	@echo "--- 4. Generating Application Key..."
	@php artisan key:generate
	@echo "--- 5. Running Migrations..."
	@php artisan migrate
	@echo "--- 6. Generating Permissions..."
	@php artisan permissions:generate
	@echo "--- 7. Running Database Seeder..."
	@php artisan db:seed
	@echo "-------------------------------------------------"
	@echo "✅ Setup Complete. Run 'make dev' to start."
	@echo "================================================="

dev:
	@echo "================================================="
	@echo "🚀 Starting Development Environment..."
	@echo "-------------------------------------------------"
	@echo "--- 1. Starting PHP Artisan Server on host $(h) port $(p) (B)..."
	@echo "--- 2. Starting Vite/NPM Dev Server (F)..."
	@echo "--- 3. Running concurrently..."
	@$(DEV_COMMAND)

# dev:
# 	@echo "================================================="
# 	@echo "🚀 Starting Development Environment..."
# 	@echo "-------------------------------------------------"
# 	@echo "--- 1. Starting PHP Artisan Server on port 8101 (B)..."
# 	@echo "--- 2. Starting Vite/NPM Dev Server (F)..."
# 	@echo "--- 3. Running concurrently..."
# 	@$(DEV_COMMAND)


clear:
	@echo "================================================="
	@echo "🚀 Clearing Laravel logs, cache, and fixing permissions..."
	@echo "-------------------------------------------------"
	@echo "--- 1. Running 'php artisan optimize:clear'..."
	@php artisan optimize:clear
	@echo "--- 2. Removing old log files..."
	@sudo rm -f storage/logs/*.log
	@echo "--- 3. Removing bootstrap cache files..."
	@sudo rm -rf bootstrap/cache/*.php
	@echo "--- 4. Changing ownership of storage/cache directories to $(USER)..."
	@sudo chown -R $(USER): storage bootstrap/cache
	@echo "--- 5. Setting read/write permissions (775) on storage/cache directories..."
	@sudo chmod -R 775 storage bootstrap/cache
	@echo "================================================="
	@echo "✅ Clear and Permissions Fix Complete."

migrate:
	@echo "================================================="
	@echo "🏗️  Running Migrations..."
	@php artisan migrate
	@echo "✅ Database Migrations Complete."

m-seed:
	@echo "================================================="
	@echo "🏗️  Running Migrations, Permissions, and Database Seeding..."
	@echo "-------------------------------------------------"
	@echo "--- 1. Running Database Migrations..."
	@php artisan migrate
	@echo "--- 2. Generating Permissions..."
	@php artisan permissions:generate
	@echo "--- 3. Seeding the Database..."
	@php artisan db:seed
	@echo "================================================="
	@echo "✅ Database Setup Complete."

# model:
# 	@if [ -z "$(n)" ]; then \
# 		echo "ERROR: You must provide a model name using n=<ModelName>."; \
# 		echo "Example: make model n=Post"; \
# 		exit 1; \
# 	fi
# 	@echo "================================================="
# 	@echo "Creating model: $(n)..."
# 	@MODEL_ARGS=""; \
# 	if [ "$(m)" = "t" ]; then MODEL_ARGS="$$MODEL_ARGS -m"; fi; \
# 	if [ "$(r)" = "t" ]; then \
# 		MODEL_ARGS="$$MODEL_ARGS -r"; \
# 	elif [ "$(c)" = "t" ]; then \
# 		MODEL_ARGS="$$MODEL_ARGS -c"; \
# 	fi; \
# 	php artisan make:model $(n) $$MODEL_ARGS;
# 	@echo "✅ Model $(n) and related files created successfully."
# 	@echo "================================================="

model:
	@if [ -z "$(n)" ]; then \
		echo "❌ ERROR: You must provide a model name using n=<ModelName>."; \
		echo "👉 Example: make model n=Post"; \
		exit 1; \
	fi
	@echo "================================================="
	@echo "🚀 Creating model: $(n)..."
	@MODEL_ARGS=""; \
	if [ "$(m)" = "t" ]; then MODEL_ARGS="$$MODEL_ARGS -m"; fi; \
	if [ "$(r)" = "t" ]; then \
		MODEL_ARGS="$$MODEL_ARGS -r"; \
	elif [ "$(c)" = "t" ]; then \
		MODEL_ARGS="$$MODEL_ARGS -c"; \
	fi; \
	php artisan make:model $(n) $$MODEL_ARGS; \
	ROUTE_NAME=$$(echo $(n) | tr '[:upper:]' '[:lower:]'); \
	ROUTE_FILE="routes/web.php"; \
	if [ "$(r)" = "t" ]; then \
		if ! grep -q "Route::resource('$$ROUTE_NAME'" $$ROUTE_FILE 2>/dev/null; then \
			echo "🛠 Adding resource route to $$ROUTE_FILE..."; \
			echo "" >> $$ROUTE_FILE; \
			echo "r::resource('$$ROUTE_NAME', $$(n)Controller::class);" >> $$ROUTE_FILE; \
		else \
			echo "⚠️  Resource route for '$(n)' already exists."; \
		fi; \
	elif [ "$(c)" = "t" ]; then \
		if ! grep -q "view('$$ROUTE_NAME.index')" $$ROUTE_FILE 2>/dev/null; then \
			echo "🛠 Adding simple route to $$ROUTE_FILE..."; \
			echo "" >> $$ROUTE_FILE; \
			echo "r::get('/$$ROUTE_NAME', function () {" >> $$ROUTE_FILE; \
			echo "    return view('$$ROUTE_NAME.index');" >> $$ROUTE_FILE; \
			echo "})->name('$$ROUTE_FILE');" >> $$ROUTE_FILE; \
		else \
			echo "⚠️  Simple route for '$(n)' already exists."; \
		fi; \
	fi
	@echo "✅ Model $(n) and related files created successfully."
	@echo "================================================="


controller:
	@if [ -z "$(n)" ]; then \
		echo "ERROR: You must provide a controller name using n=<ControllerName>."; \
		echo "Example: make controller n=PostController"; \
		exit 1; \
	fi
	@echo "================================================="
	@echo "Creating controller: $(n)..."
	@CONTROLLER_ARGS=""; \
	if [ "$(r)" = "t" ]; then CONTROLLER_ARGS="$$CONTROLLER_ARGS --resource"; fi; \
	php artisan make:controller $(n) $$CONTROLLER_ARGS;
	@echo "✅ Controller $(n) created successfully."
	@echo "================================================="

component:
	@if [ -z "$(n)" ]; then \
		echo "ERROR: You must provide a component name using n=<ComponentName>."; \
		echo "Example: make component n=post.show"; \
		exit 1; \
	fi
	@echo "================================================="
	@echo "Creating Livewire component: $(n)..."
	@COMPONENT_ARGS=""; \
	if [ "$(f)" = "t" ]; then COMPONENT_ARGS="$$COMPONENT_ARGS --force"; fi; \
	php artisan make:component $(n) $$COMPONENT_ARGS;
	@echo "✅ Livewire component $(n) created successfully."
	@echo "================================================="

# new

view:
	@if [ -z "$(n)" ]; then \
		echo "❌ ERROR: You must provide a view name using n=<view.name>"; \
		echo "👉 Example: make view n=frontend.wallet"; \
		exit 1; \
	fi
	@VIEW_PATH="resources/views/$$(echo $(n) | tr '.' '/').blade.php"; \
	DIRNAME=$$(dirname $$VIEW_PATH); \
	if [ ! -d "$$DIRNAME" ]; then \
		echo "📁 Creating directory: $$DIRNAME"; \
		mkdir -p "$$DIRNAME"; \
	fi; \
	if [ -f "$$VIEW_PATH" ] && [ "$(f)" != "t" ]; then \
		echo "⚠️  View already exists: $$VIEW_PATH (use f=t to overwrite)"; \
		exit 1; \
	fi; \
	echo "📝 Creating Blade view: $$VIEW_PATH"; \
	echo "@extends('layouts.app')" > "$$VIEW_PATH"; \
	echo "@section('content')" >> "$$VIEW_PATH"; \
	echo "<h1>$(n) view</h1>" >> "$$VIEW_PATH"; \
	echo "@endsection" >> "$$VIEW_PATH"; \
	ROUTE_NAME=$$(basename $$VIEW_PATH .blade.php); \
	ROUTE_PATH=$$(echo $(n) | awk -F'.' '{print $$NF}'); \
	if ! grep -q "view('$(n)')" routes/web.php; then \
		echo "🛠 Adding route to routes/web.php..."; \
		echo "" >> routes/web.php; \
		echo "r::get('/$$ROUTE_PATH', function () {" >> routes/web.php; \
		echo "    return view('$(n)');" >> routes/web.php; \
		echo "})->name('$$ROUTE_PATH');" >> routes/web.php; \
	else \
		echo "⚠️  Route for '$(n)' already exists in routes/web.php"; \
	fi; \
	echo "✅ Blade view and route created successfully!"

service:
	@if [ -z "$(n)" ]; then \
		echo "ERROR: You must provide a service name using n=<ServiceName>."; \
		echo "Example: make service n=PostService"; \
		exit 1; \
	fi
	@echo "================================================="
	@echo "Creating Service Class: app/Services/$(n).php..."
	@mkdir -p app/Services
	@php artisan make:class $(n) --path="app/Services"; \
		if [ $$? -ne 0 ]; then \
			echo "Warning: make:class command not found. Creating manually."; \
			echo "<?php\n\nnamespace App\\Services;\n\nclass $(n)\n{\n    // Your service logic here\n}\n" > app/Services/$(n).php; \
		fi
	@echo "✅ Service Class $(n) created successfully."
	@echo "================================================="

middleware:
	@if [ -z "$(n)" ]; then \
		echo "ERROR: You must provide a middleware name using n=<MiddlewareName>."; \
		echo "Example: make middleware n=CheckUserRole"; \
		exit 1; \
	fi
	@echo "================================================="
	@echo "Creating Middleware: $(n)..."
	@php artisan make:middleware $(n)
	@echo "✅ Middleware $(n) created successfully."
	@echo "================================================="

request:
	@if [ -z "$(n)" ]; then \
		echo "ERROR: You must provide a request name using n=<RequestName>."; \
		echo "Example: make request n=StorePostRequest"; \
		exit 1; \
	fi
	@echo "================================================="
	@echo "Creating Form Request: $(n)..."
	@php artisan make:request $(n)
	@echo "✅ Form Request $(n) created successfully."
	@echo "================================================="

resource:
	@if [ -z "$(n)" ]; then \
		echo "ERROR: You must provide a resource name using n=<ResourceName>."; \
		echo "Example: make resource n=PostResource"; \
		exit 1; \
	fi
	@echo "================================================="
	@echo "Creating API Resource: $(n)..."
	@RESOURCE_ARGS=""; \
	if [ "$(c)" = "t" ]; then RESOURCE_ARGS="$$RESOURCE_ARGS --collection"; fi; \
	php artisan make:resource $(n) $$RESOURCE_ARGS
	@echo "✅ API Resource $(n) created successfully."
	@echo "================================================="

# MANAGEMENT SECTION
git:
	@echo "================================================="
	@echo "💾 Running Git Workflow..."
	@echo "-------------------------------------------------"
	@echo "--- 1. Adding all changed and untracked files (git add .)..."
	git add .
	@echo "--- 2. Committing changes with message 'modified nun'..."
	git commit -m 'modified nun'
	@echo "--- 3. Pushing committed changes to remote repository (git push)..."
	git push
	@echo "================================================="
	@echo "✅ Git Workflow Complete."



