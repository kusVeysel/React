import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
      <h1>About</h1>
      <hr />
      {/* 
        Iç içe rotalarda yönlendirme yaparken '/about/employee' şeklinde 
        tam yol belirtmek yönlendirme hatalarını önler.
      */}
      <Link to="/about/employee">Çalışanlar Hakkında</Link> | {' '}
      <Link to="/about/company">Şirket Hakkında</Link>

      {/* 
        Outlet: Ebeveyn rute (About) altındaki çocuk routeların 
        (EmployeeAbout veya CompanyAbout) ekranda render edileceği yeri belirler.
      */}
      <Outlet />
    </div>
  )
}

export default About