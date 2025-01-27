import { store, storePersistor } from '@/store';
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router';

import { PersistGate } from 'redux-persist/integration/react';
import routes from '~react-pages';
import 'nprogress/nprogress.css';
import '@/tailwind.css';
import '@/index.css';

const router = createBrowserRouter(routes);

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  root.render(
    <StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={storePersistor}>
          <Suspense fallback={<p>Loading...</p>}>
            <RouterProvider router={router} />
          </Suspense>
        </PersistGate>
      </Provider>
    </StrictMode>
  );
}
else {
  throw new Error(
    'Root element with ID \'root\' was not found in the document. Ensure there is a corresponding HTML element with the ID \'root\' in your HTML file.'
  );
}
