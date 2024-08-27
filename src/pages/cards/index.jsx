import { useState } from "react"
import { NavLink } from "react-router-dom"
import './style.css'

const Index = () => {
  const [cars, setCars] = useState([
    {id:1, name: 'Gentra', price: 13500, year: 2023, color: 'black'}
  ])
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-2 offset-2">
          <button className="btn btn-primary">Open Modal</button>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-8 offset-2">
          <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <th>T/R</th>
                <th>Name</th>
                <th>Price</th>
                <th>Year</th>
                <th>Color</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                cars.map((item, index) => {
                  return <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.year}</td>
                      <td>{item.color}</td>
                      <td>
                        <NavLink className="btn btn-primary" to={`/cards/${item.id}`}>View</NavLink>
                      </td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Index