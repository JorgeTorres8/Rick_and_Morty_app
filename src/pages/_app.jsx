import { AuthProvider } from "@/context/AuthProvider"
import { AppProvider } from "@/context/AppProvider"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <AuthProvider>
                <AppProvider>
                    <Component {...pageProps} />
                    <Toaster />
                </AppProvider>
            </AuthProvider>
        </ThemeProvider>
    )
}

export default MyApp