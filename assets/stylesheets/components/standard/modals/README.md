# Evolution UI Framework Component - Modals

Modal components display content blocks, such as confirmation, dialog boxes, and search results. When a modal is triggered, interactions with the main page are temporarily blocked. To close an opened modal, you may click the close button or the space (overlay) other than the modal itself.

Each modal container should have the `evo_c-modal` class. Add the class names below to the container to achieve different modal layouts: `evo_c-modal--basic` for basic layout, `evo_c-modal--full` for full-screen modal, `evo_c-modal--fixed` for modal with fixed header and footer, and `evo_c-modal--dialog` for dialog modal.

Only one overlay element is needed for each page. It should contains two classes `evo_c-modal-overlay` and `js-modal-overlay`.

