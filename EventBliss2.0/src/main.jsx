import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import {
  QueryClientProvider,
} from 'react-query'
import { queryClient } from './query.js'

const PUBLISHABLE_KEY = "pk_test_dG91Z2gtcmFjY29vbi00Mi5jbGVyay5hY2NvdW50cy5kZXYk"
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignInUrl='/organizer' afterSignUpUrl='/organizer'> 
        <App />
      </ClerkProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
