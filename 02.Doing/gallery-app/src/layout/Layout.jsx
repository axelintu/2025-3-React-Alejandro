import NavBar from "./NavBar";
import StatusBar from "./StatusBar";

export default function Layout({children, currentView, onViewChange})
{
console.log(onViewChange);
return(<div>
  <header>
    <NavBar currentView={currentView} onViewChanges={onViewChange} />
    <StatusBar currentView={currentView}/>
  </header>
    <main>
      {children}
    </main>
</div>);
}