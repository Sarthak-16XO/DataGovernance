
import Header from "../components/Header";
import Footer from "../components/Footer";
import DashboardComp from "../components/DashboardComp";
import Siderbar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="w-full bg-white h-screen">
      <Header />
      <div className="flex w-full">
        <div className="hidden md:block md:w-[20%]">
          <Siderbar />
        </div>
        <div className="w-full h-fit md:w-[80%]">
          <DashboardComp />
        </div>
      </div>
      <div className="z-50">
      <Footer />
      </div>
    </div>
  )
}

export default Dashboard;
