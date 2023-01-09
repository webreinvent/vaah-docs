# Controllers

[[toc]]

The controller layer is high-level functions that perform a specific type of task. They typically fetch from services and inject them into models and that way they control and update app state.

State management logic goes in here. You may place your logic for providers, blocs, or any other state management logic into this folder. You may even rename this as your state management architecture like providers, blocs, etc.

The controller layer is represented by various controllers which contain the Application Logic of the app. controllers are used to complete any significant action within your app.

Controllers remove the business logic from the Model. Models can get huge when just managing data (+ an API to work on that data). From our experience, it never scales well trying to have application logic and state combined in one class, you always need to split these up one way or another as things scale.

Controllers are totally encapsulated. Because each controller is its own little object, they completely protect their own state and never collide with other Controllers. As opposed to a static function, or a Model method, you can run any number of concurrent Controllers, and they will never collide.

Controllers provide a clean API for Application Logic. Because each Controller is isolated in its own file, they can grow quite complex and still be easy to work on and debug.

Working with multiple data sets is easy. Controllers can access any combination of models and services to do what they need to do. This removes most dependencies between models, and creates a clear domain layer where these types of high level actions should exist.

The code is easy to maintain. This is probably the biggest win for controllers. When returning to a project weeks or months later, it’s extremely easy to jump in and find what you need to work on, as all the high-level business logic is wrapped in these dedicated class files with very clear names. The value of this can not be overstated.