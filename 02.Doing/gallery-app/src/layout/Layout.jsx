import PropTypes from 'prop-types';
import NavBar from "./NavBar";
import StatusBar from "./StatusBar";

function Layout({children, currentView, onViewChange}) {
return(<div>
  <header>
    <NavBar currentView={currentView} onViewChanges={onViewChange} />
    <StatusBar currentView={currentView} onViewChanges={onViewChange} />
  </header>
    <main className={'main-'+currentView}>
      {children}
    </main>
</div>);
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  currentView: PropTypes.string.isRequired,
  onViewChange: PropTypes.func.isRequired
}

export default Layout;