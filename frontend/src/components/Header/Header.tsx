import './Header.css'
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
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/admin">Employees</Link>
                        </li>
                    </ul>
                </nav>
            <h1 className="title flex flex-row">The Cielito Lindo Boutique</h1>

            {/*Location */}
            <div className='visitUs flex justify-center gap-4 text-[20px]'>Visit us
                <a href="https://maps.app.goo.gl/ChzHnp4883DrdS1K8" target='_blank'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>
                </a>
            </div>
            <div className='buttonsHeader flex justify-end gap-4'>
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