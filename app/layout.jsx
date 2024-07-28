import "@styles/global.css"
export const metadata = {
    title: "PromptOpia DB",
    description: "Discover & Share AI Prompts"
}
const RootLayout = ({ Children }) => {
    return (

        <html lang="en">
            <body>
                <div className="main"></div>
                <div className="gradient"></div>
                <main className="app">
                    {Children}
                </main>
            </body>

        </html>
    )
}

export default RootLayout