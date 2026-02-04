import { CarouselComponent } from "../Components/carousel";

export function Home() {
//    const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hi! We're the Ridgewood Food Co-Op!</h1>

    
    <CarouselComponent />
    
    <p>Welcome to our website. We're excited to have you here!</p>
    <p>Explore our selection of fresh, local produce and artisanal goods. Join us in supporting our community and promoting sustainable living.</p>
    <p>Feel free to browse our offerings and place an order online. Thank you for choosing the Ridgewood Food Co-Op!</p>

    <button href=''  target='_blank'>Order Here</button>
   
    </>
  )
}