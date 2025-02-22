import "./App.css";
import Header from "./Header/Header";
import cart from "/cart2.png";
import first from "/first.png";
import second from "/second.png";
import third from "/third.png";
import fourth from "/fourth.png";
import { useReducer, useRef, useEffect, useCallback } from "react";

const initialValue = {
  count: 0,
  activeImage: "first",
  modalVisible: false,
  addToCart : false,
  cartModal: false,
  res: false,
};

function reduce(state, action) {
  switch (action.type) {
    case "setImage":
      return { ...state, activeImage: action.payload };
    case "increace":
      return { ...state, count: state.count + 1 };
    case "decrease":
      return { ...state, count: Math.max(0, state.count - 1) };
    case "modal":
      return { ...state, modalVisible: true };
    case "changeModal":
      return { ...state, modalVisible: false };
    default:
      case "cartshidamateba":
        return{...state, addToCart: true}
      case "changeCartModal":
        return{...state , cartModal: !state.cartModal}
      case "gasuftaveba":
        return{...state, addToCart:false }
      case "opennavbar":
        return{...state , res: true}
        case "closenavbar":
          return{...state , res: false}
      return state;
  }
}



function App() {
  const [state, dispatch] = useReducer(reduce, initialValue);
  const ImageRef = useRef(null);
  const navbarref = useRef(null)
  
  

  useEffect(() => {
    const closeModal = (event) => {
      if (!ImageRef.current?.contains(event.target)) {
        dispatch({ type: "changeModal" });
      }
      if (!navbarref.current?.contains(event.target)) {
        dispatch({ type: "closenavbar" });
      }
    };

    document.addEventListener("mousedown", closeModal);
    return () => {
      document.removeEventListener("mousedown", closeModal);
    };
  }, []);

  const handleImageClick = useCallback((type) => {
    dispatch({ type: "setImage", payload: type });
  }, []);

  return (
    <>
      <div
        className={`flex items-center h-screen flex-col ${
          state.modalVisible && "bg-[#000000] opacity-20"
        }`}
      >
        <Header dispatch={dispatch}/>

        <div className="h-[565px] w-[100%] flex gap-[100px] justify-center items-center mt-[100px] max-lg:flex-col max-lg:h-[100vh] max-lg:gap-5 max-lg:mt-0">
          <div className="w-[100%] flex justify-end max-lg:hidden">
            <div className="w-[445px]">
            <button onClick={() => dispatch({ type: "modal" })}>
              <img
                className="w-[445px] h-[445px]"
                src={
                  state.activeImage === "first"
                    ? first
                    : state.activeImage === "second"
                    ? second
                    : state.activeImage === "third"
                    ? third
                    : fourth
                }
                alt=""
              />
            </button>
            <div className="flex justify-between mt-[30px]">
              {["first", "second", "third", "fourth"].map((img, idx) => (
                <button
                  key={idx}
                  className={`cursor-pointer ${
                    state.activeImage === img
                      ? "border-[2px] opacity-30 border-[#FF7E1B] rounded-[10px]"
                      : "hover:opacity-60"
                  }`}
                  onClick={() => handleImageClick(img)}
                >
                  <img
                    className="w-[88px] h-[88px]"
                    src={
                      img === "first"
                        ? first
                        : img === "second"
                        ? second
                        : img === "third"
                        ? third
                        : fourth
                    }
                    alt=""
                  />
                </button>
              ))}
            </div>
            </div>
          </div>

          <div className=" hidden max-lg:flex max-lg:items-center">
          <button
              onClick={() => {
                const images = ["first", "second", "third", "fourth"];
                const currentIndex = images.indexOf(state.activeImage);
                const prevIndex =
                  (currentIndex - 1 + images.length) % images.length;
                dispatch({ type: "setImage", payload: images[prevIndex] });
              }}
              className="w-[56px] h-[56px] rounded-[50%] bg-white absolute ml-[20px]"
            >
              <i className="fa-solid fa-chevron-left text-[#1D2026]"></i>
            </button>

            <img
              className="w-[375px] h-[300px]"
              src={
                state.activeImage === "first"
                  ? first
                  : state.activeImage === "second"
                  ? second
                  : state.activeImage === "third"
                  ? third
                  : fourth
              }
              alt=""
            />

            <button
              onClick={() => {
                const images = ["first", "second", "third", "fourth"];
                const currentIndex = images.indexOf(state.activeImage);
                const nextIndex = (currentIndex + 1) % images.length;
                dispatch({ type: "setImage", payload: images[nextIndex] });
              }}
              className="w-[56px] h-[56px] rounded-[50%] bg-white absolute ml-[300px]"
            >
              <i className="fa-solid fa-chevron-right text-[#1D2026]"></i>
            </button>
          </div>

              <div className="w-[100%] max-lg:flex max-lg:justify-center">
              <div className="w-[445px] h-[426px] max-lg:w-[327px] max-lg:">
            <p className="font-bold text-[13px] text-[#FF7E1B] ">
              Sneaker Company
            </p>
            <p className="font-bold text-[44px] text-[#1D2026] mt-[10px] max-lg:text-[28px]">
              Fall Limited Edition Sneakers
            </p>
            <p className="font-normal text-[16px] text-[#69707D] mt-[20px] max-lg:text-[15px]">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div className="max-lg:flex max-lg:items-center max-lg:justify-between">
            <div className="flex items-center mt-[10px]">
              <p className="font-bold text-[28px] text-[#1D2026]">$125.00</p>
              <p className="font-bold text-[16px] text-[#FF7E1B] w-[51px] h-[27px] bg-[#FFEEE2] text-center">
                50%
              </p>
            </div>
            <p className="font-bold text-[16px] text-[#B6BCC8] line-through">
              $250.00
            </p>
            </div>

            <div className="flex gap-[40px] mt-[20px] max-lg:flex-col max-lg:gap-[20px]">
              <div className="flex items-center gap-[40px] max-lg:gap-[120px] max-lg:justify-center">
                <button
                  onClick={() => dispatch({ type: "decrease" })}
                  className="text-[30px] text-[#FF7E1B] cursor-pointer"
                >
                  -
                </button>
                <p className="fonr-bold text-[16px] text-[#1D2026] pt-[6px]">
                  {state.count}
                </p>
                <button
                  onClick={() => dispatch({ type: "increace" })}
                  className="text-[20px] text-[#FF7E1B] cursor-pointer"
                >
                  +
                </button>
              </div>

              <button onClick={()=> dispatch({type: "cartshidamateba"})} className="w-[272px] h-[56px] bg-[#FF7E1B] rounded-[10px] flex items-center justify-center gap-[20px] max-lg:w-[327px]">
                <img className="w-[17px] h-[16px]" src={cart} alt="" />
                <p className="font-bold text-[16px] text-white">Add to cart</p>
              </button>
            </div>
          </div>
              </div>
        </div>

      {state.res &&
                <div ref={navbarref} className="w-[250px] h-screen bg-white fixed top-0 left-0">
                <button
                  onClick={() => dispatch({ type: "closenavbar" })}
                  className=" text-xl font-bold text-[#69707D] ml-[20px] mt-[30px]"
                >
                  ✕
                </button>
    
                <ul className='flex font-bold text-[18px] text-[#1D2026] gap-[30px] h-[110px] flex-col ml-[20px] mt-[50px]'>
                    <li className='h-[100%] hover:border-b-[4px] border-b-[#FF7E1B] flex items-center cursor-pointer hover:text-[#1D2026]'>Collections</li>
                    <li className='h-[100%] hover:border-b-[4px] border-b-[#FF7E1B] flex items-center cursor-pointer  hover:text-[#1D2026]'>Men</li>
                    <li className='h-[100%] hover:border-b-[4px] border-b-[#FF7E1B] flex items-center cursor-pointer  hover:text-[#1D2026]'>Women</li>
                    <li className='h-[100%] hover:border-b-[4px] border-b-[#FF7E1B] flex items-center cursor-pointer  hover:text-[#1D2026]'>About</li>
                    <li className='h-[100%] hover:border-b-[4px] border-b-[#FF7E1B] flex items-center cursor-pointer  hover:text-[#1D2026]'>Contact</li>
                </ul>   
    
    
              </div>
      }

        
      {state.cartModal && 
            (state.addToCart ? 
              <div className="w-[360px] h-[256px] rounded-[10px] shadow-2xl flex flex-col items-center fixed bg-white z-40 top-[100px] right-[50px] max-md:right-[10px]">
              <div className="h-[67px] border-b border-b-[#E4E9F2] flex items-center w-full">
                  <p className="font-bold text-[16px] text-[#1D2026] pl-[30px]">Cart</p>
              </div>
    
              <div className="flex h-[50px] items-center w-[90%] gap-[20px] mt-[20px]">
                  <img className="w-[50px] h-[50px] rounded-[4px]" src={first} alt="" />
                  <div>
                    <p className="font-normal text-[16px] text-[#69707D]">Fall Limited Edition Sneakers</p>
                    <div className="flex gap-[5px]">
                    <p className="font-normal text-[16px] text-[#69707D]">$125.00 x {state.count}</p>
                    <p className="font-bold text-[16px] text-[#1D2026]">${125* state.count}</p>
                    </div>
                  </div>
                  <button onClick={()=> dispatch({type : "gasuftaveba"})}><i className="fa-solid fa-trash-can text-[#C3CAD9]"></i></button>
              </div>
    
              <button className="w-[312px] h-[56px] rounded-[10px] bg-[#FF7E1B] font-bold text-[16px] text-white mt-[30px]">Checkout</button>
    
          </div>
          :
          <div className="w-[360px] h-[256px] rounded-[10px] shadow-2xl flex flex-col items-center fixed bg-white z-40 top-[100px] right-[50px] max-md:right-[10px]">
          <div className="h-[67px] border-b border-b-[#E4E9F2] flex items-center w-full">
              <p className="font-bold text-[16px] text-[#1D2026] pl-[30px]">Cart</p>
          </div>
  
          <div className="flex items-center h-[170px]">
            <p className="font-bold text-[16px] text-[#69707D] w-full">Your cart is empty.</p>
          </div>
  
  
  
      </div>
            )
      }
      </div>




      {state.modalVisible && (
        <div className="fixed inset-0 backdrop-blur-[1px] flex items-center justify-center">
          <div
            ref={ImageRef}
            className="relative p-4  w-[550px] flex flex-col items-center"
          >
            <button
              onClick={() => dispatch({ type: "changeModal" })}
              className="absolute top-[-40px] right-0 text-xl font-bold text-white hover:text-[#FF7E1B]"
            >
              ✕
            </button>
            <button
              onClick={() => {
                const images = ["first", "second", "third", "fourth"];
                const currentIndex = images.indexOf(state.activeImage);
                const prevIndex =
                  (currentIndex - 1 + images.length) % images.length;
                dispatch({ type: "setImage", payload: images[prevIndex] });
              }}
              className="w-[56px] h-[56px] rounded-[50%] bg-white absolute top-[37%] left-[-30px]"
            >
              <i className="fa-solid fa-chevron-left text-[#1D2026]"></i>
            </button>

            <img
              className="w-[550px] h-[550px]"
              src={
                state.activeImage === "first"
                  ? first
                  : state.activeImage === "second"
                  ? second
                  : state.activeImage === "third"
                  ? third
                  : fourth
              }
              alt=""
            />

            <button
              onClick={() => {
                const images = ["first", "second", "third", "fourth"];
                const currentIndex = images.indexOf(state.activeImage);
                const nextIndex = (currentIndex + 1) % images.length;
                dispatch({ type: "setImage", payload: images[nextIndex] });
              }}
              className="w-[56px] h-[56px] rounded-[50%] bg-white absolute right-[-30px] top-[37%]"
            >
              <i className="fa-solid fa-chevron-right text-[#1D2026]"></i>
            </button>
            <div className="flex justify-center gap-[30px] mt-[30px] w-[500px]">
              {["first", "second", "third", "fourth"].map((img, idx) => (
                <button
                  key={idx}
                  className={`cursor-pointer ${
                    state.activeImage === img
                      ? "border-[2px] opacity-30 border-[#FF7E1B] rounded-[10px]"
                      : "hover:opacity-60"
                  }`}
                  onClick={() => handleImageClick(img)}
                >
                  <img
                    className="w-[88px] h-[88px] rounded-md"
                    src={
                      img === "first"
                        ? first
                        : img === "second"
                        ? second
                        : img === "third"
                        ? third
                        : fourth
                    }
                    alt=""
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
