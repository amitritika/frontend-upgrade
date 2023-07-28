import Layout from "@/components/Layout"
import Private from "@/components/auth/Private";
import AccountInformation from "@/components/user/AccountInformation"

const AccountUpdate: React.FC = () => {
        
  
  return (
  <Layout>
      <Private>
      <AccountInformation />
      </Private>
  </Layout>
)
}

export default AccountUpdate;