import Search from './Search'

function Header() {
    const items = ["Men", "Women", "Shoes", "Accesories"]
    return (
        <div className="flex justify-between items-end p-8 bg-[#e3e3e3] text-[#233142] m-8 rounded-md header">
            <menu className='flex'>
                <nav>
                    <ul className="flex flex-column gap-4 text-2xl">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/catalog">Catalog</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </menu>
            <h1 className="title">The Cielito Lindo Boutique</h1>
            <Search items={items} />
            <div className='flex justify-end gap-4'>
                {/*Login */}
                <button 
                type="button"
                className="text-2xl bg-[#f95959] p-2 rounded-s-lg">
                Login
                </button>
                {/*Sigup */}
                <button 
                    type="button"
                    className="text-2xl bg-[#f95959] p-2 rounded-s-lg">
                    Sign up
                </button>
            </div>
        </div>
    );
}

export default Header