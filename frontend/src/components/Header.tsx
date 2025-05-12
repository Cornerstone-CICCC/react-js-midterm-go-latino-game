import Search from './Search'

function Header() {
    const items = ["Men", "Women", "Shoes", "Accesories"]
    return (
        <div className="flex justify-evenly p-8 bg-[#e3e3e3] m-8 rounded-md header">
            <menu className='flex'>
                <nav className="flex">
                    <ul className="flex flex-column">
                        <li>Home</li>
                        <li>Catalog</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </menu>
            <h1>Title</h1>
            <Search items={items} />
            <button 
                type="button"
                className="border border-black">
                Login
            </button>
        </div>
    );
}

export default Header