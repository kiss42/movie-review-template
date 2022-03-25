import '../app.css'

const Layout = ({ children }) => (
    <div>
        <header className="app-header">
            <h2>Movie & TV Review Template</h2>
        </header>
        {children}
        <footer className="app-footer">
            <p className="signature">
                Steven Pierre, {new Date().getFullYear()}
                (If you like this, check out
                <a href="https://vojtastruhar.github.io/steam-review-template/"> here</a>)
            </p>
        </footer>
    </div>
)

export default Layout
