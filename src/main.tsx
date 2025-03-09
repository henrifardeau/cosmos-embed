import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

function loadWidget() {
  const scriptTag = document.currentScript!;
  const propertyId = scriptTag.getAttribute('data-property-id');

  if (!propertyId) {
    throw new Error('[Cosmos Embed] - Missing required parameter propertyId');
  }

  const container = document.createElement('div');
  container.id = 'cosmos-widget';

  scriptTag.parentNode!.insertBefore(container, scriptTag);
  scriptTag.remove();

  const root = createRoot(container);

  root.render(
    <StrictMode>
      <App propertyId={propertyId} />
    </StrictMode>
  );
}

loadWidget();
