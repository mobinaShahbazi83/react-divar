import Main from "../components/templates/Main"
import Sidebar from "../components/templates/Sidebar"

 const styles = {display: "flex"}
 function HomePage() {
  return (
    <div style={styles}>
      <Sidebar/>
      <Main/>
    </div>
  )
}

export default HomePage