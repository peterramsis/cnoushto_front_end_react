import logo from '@/assets/images/logo.png';
import "./header.scss";
export default function HeaderApp() { 
    return (
       <header className="d-flex justify-content-around">
        <section className="logo">
                <img src={logo} alt="logo" className="img-fluid" style={{ width: '100px' }} />
            </section>
            <nav className="d-flex align-items-center">
           <ul className="nav">
             <li> <a href=''  className="nav-link" >الرئيسية</a> </li>
             <li> <a className='nav-link'> تسجيل الدخول </a> </li>
             <li><a href='#'  className="nav-link" >التسجيل</a></li>

             <li><a href=''  className="nav-link" >مواضعيك</a></li>

             <li> <a className='nav-link'>المواضيع المفضلة</a> </li>
     
             <li> <a href='#'  className="nav-link" >عن الموقع</a> </li>

             <li>
              <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    <a className="nav-link">peter</a> 
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                  <li>الملف الشخصى </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">تسجيل الخروج</a></li>
                </ul>
              </div>
             </li>
           </ul>
        </nav>
    </header>
    )
}