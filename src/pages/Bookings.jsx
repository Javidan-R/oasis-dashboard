import React from 'react'
import Row from '@ui/Row'
import Button from '@ui/Button'

 const Bookings = () => {
  return (
   <Row direction="vertical">
      <h1>Bookings</h1>
      <p>Welcome to the bookings management page!</p>
      <p>Here you can view and manage all the bookings made in your application.</p>
      <p>Use the navigation menu to access different sections related to bookings.</p>
      <p>Stay tuned for more features coming soon!</p>
      <Button > get started  </Button>
    </Row>  
  )
}
export default Bookings;