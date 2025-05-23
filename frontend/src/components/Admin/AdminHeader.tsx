import { Link } from 'react-router-dom'

function Header() {

    return (
        <div className="flex justify-between items-center p-8 bg-[#e3e3e3] text-[#233142] m-8 rounded-md header">
                <nav className='flex flex-row'>
                    <ul className="flex flex-col gap-4 text-2xl">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/catalog">Catalog</Link>
                        </li>
                    </ul>
                </nav>
            <h1 className="title">The Cielito Lindo Boutique</h1>

            <div className='flex justify-end gap-4'>
                {/*Login */}
                <button 
                type="button"
                className="text-2xl bg-[#f95959] p-2 rounded-s-lg">
                    <Link to="/login">Login</Link>
                </button>
                {/*Signup */}
                <button 
                type="button"
                className="text-2xl bg-[#f95959] p-2 rounded-s-lg">
                    <Link to="/signup">Signup</Link>
                </button>
            </div>
        </div>
    );
}

export default Header