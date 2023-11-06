# cypress-dialog-repro

Once the project has been cloned from github run

`npm install`

Once the install completes you may need to run

`npx cypress open`

and configure cypress to run component tests.

After that you should be able to run

`npm run test:cypress`

to run Cypress test runner. Once the test runner UI is loaded, load the `ContentModal` test.cy.js file.

Note that the test appears to load the modal with a modal scrim (which is the desired outcome) but when any of the steps are hovered/clicked in the `Time Travel` panel the dialog renders as `modeless` (no scrim) and changes postion. This causes issues with matching Applitools Eyes baselines.
