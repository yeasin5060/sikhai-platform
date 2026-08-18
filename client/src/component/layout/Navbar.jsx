import React from 'react'

const Navbar = () => {
    return (
        <header className='py-8 px-16 bg-red-500'>
            <div className="container mx-auto px-4">
                <nav className="navbar">
                    <div className="brand">
                    <img src="logo.png" alt="শিখাই লোগো" />
                    শিখাই
                    </div>
                    <ul className="nav-menu">
                    <li>
                        <a href="#home" className="nav-link">
                        হোম
                        </a>
                    </li>
                    <li>
                        <a href="#courses" className="nav-link">
                        কোর্সসমূহ
                        </a>
                    </li>
                    <li>
                        <a href="#features" className="nav-link">
                        সুবিধা
                        </a>
                    </li>
                    <li>
                        <a href="#testimonials" className="nav-link">
                        সফল শিক্ষার্থী
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="nav-link">
                        যোগাযোগ
                        </a>
                    </li>
                    </ul>
                    <button
                    className="btn btn-primary"
                    onclick="document.getElementById('contactModal').style.display='block'"
                    >
                    <i className="fas fa-phone" />
                    যোগাযোগ করুন
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default Navbar

