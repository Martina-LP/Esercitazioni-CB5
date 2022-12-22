import './header.css';

export const Header = () => {

  const menuItems = [
    { label: 'Home', href: '#header', id: 1 },
    { label: 'About', href: '#about', id: 2 },
    { label: 'Services', href: '#services', id: 3 },
    { label: 'Feedback', href: '#feedback', id: 4 },
    { label: 'Contact', href: '#footer', id: 5 }
  ];

  return <header className="Header">
    <div className="container">
      <div className="row">
        <div className="col">😸</div>
          <div className="col">
            <nav className="nav">
              <ul role="menu">
                {
                  menuItems.map(function (menuItem) {
                    console.log({ menuItem });

                  return (
                    <li key={menuItem.id} role="menuitem">
                      <a href={menuItem.href}>{menuItem.label}</a>
                    </li>
                          )
                  })
                }
              </ul>
            </nav>
          </div>
      </div>
    </div>
  </header>
}
