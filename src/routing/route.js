import HomePage from "../Page/HomePage/HomePage";
import LoginPage from "../Page/LoginPage/Login";
import CreateCVPage from "../Page/CreateCVPage/CreateCVPage";
import FindJobPage from "../Page/FindJobPage/FindJobPage";
import CompanyProfile from "../Page/CompanyPage/CompanyInfo";
import HomeSeekerPage from "../Page/HomePage/HomeSeekerPage";
import ManageCVPage from "../Page/ManageCVPage/ManageCVPage";
import RecruitmentPage from "../Page/RecruitmentPage/RecruitmentPage";
import UserInfoPage from "../Page/UserInfoPage/UserInfoPage";

const route = [
    {
        path: "/", 
        exact: true, 
        component: HomePage
    },
    {   
        path: '/home',
        exact: true,
        component: HomePage
    },
    {
        path: "/loginpage", 
        exact: true, 
        component: LoginPage
    },
    {
        path: '/userProfile',
        exact: true,
        component: UserInfoPage
    },
    {
        path: '/findjobpage',
        exact: true,
        component: FindJobPage
    },
    {
        path: '/companyprofile',
        exact: true,
        component: CompanyProfile
    },
    {
        path: '/homeSeeker',
        exact: true,
        component: ManageCVPage
    },
    {
        path: '/recruitment',
        exact: true,
        component: RecruitmentPage,
    },
]

export default route;