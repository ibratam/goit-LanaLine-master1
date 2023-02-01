import "./SmsForm.scss"
import Navbar from "../../components/navbar/Navbar"
import SendDatatable from "../../components/datatable/SendDatatable"
import SmsSendForm from "./SmsSendForm"
import Sidebar from "../../components/sidebar/Sidebar"

const SmsSendPage = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
      
        <SmsSendForm /> 
        <SendDatatable />
      </div>
    </div>
  )
}

export default SmsSendPage;
