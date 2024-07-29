import "@styles/global.css"
import Nav from "@components/Nav"

export const metadata = {
    title: "PromptOpia DB",
    description: "Discover & Share AI Prompts"
}
const RootLayout = ({ children }) => {
    return (

        <html lang="en">
            <body>
                <div className="main"></div>
                <div className="gradient"></div>
                <main className="app">
                    <Nav />
                    {children}
                </main>
            </body>

        </html>
    )
}

export default RootLayout