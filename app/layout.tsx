import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'Lumen Digital | Marknadsföring, design & webbutveckling',description:'Ett tydligare varumärke. Ett starkare avtryck. Lumen Digital förenar marknadsföring, grafisk design, webbutveckling och sociala medier för den svenska marknaden.',icons:{icon:'/favicon.svg'},robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="sv"><body>{children}</body></html>}
