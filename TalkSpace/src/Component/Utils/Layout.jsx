import Header from "../Header/Header"
import LeftSidebar from "../LeftSidePages/LeftSidebar"
import RightSidebar from "../RightSidePages/RightSidebar"

const Layout = ({ children }) => {
    return (
        <div className='flex flex-col min-h-screen'>
            {/* Header - Fixed at the Top */}
            <Header/>

            <div className="flex w-full mt-16">
                {/* Left sidebar - Fixed Width */}
                <aside className="w-[250px] h-[calc(100vh-4rem)] fixed left-0 top-16 bg-gray-100 p-4 shadow-md overflow-y-auto">
                    <LeftSidebar />
                </aside>    

                {/* Main Content - Centered */}
                <main className="flext-1 p-6 ml-[180px] mr-[180px] max-w-[800px]">
                    {children}
                </main>

                {/* Right Sidebar - Fixed Width */}
                <aside className="w-[250px] h-[calc(100vh-4rem)] fixed right-0 top-16 bg-gray-100 p-4 shadow-md overflow-y-auto">
                    <RightSidebar />
                </aside>
            </div>
        </div>
    )
}

export default Layout
