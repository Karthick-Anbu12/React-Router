import React from 'react'

function Card({ele}) {
  return (
    <div>
      <div class="card m-2" style={{width: "18rem"}}>
  <img class="card-img-top" src={`${ele.image}`} alt="Card image cap"/>
  <div class="card-body">
    <p class="card-text">{ele.title}</p>
  </div>
</div>
    </div>
  )
}

export default Card
