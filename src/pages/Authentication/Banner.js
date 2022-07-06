function Banner() {
    return (
      <>
        <div
          className=" flex justify-center items-center"
          style={{
            height: 600,
  
            backgroundImage: `url(https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/12/REJ93.jpeg)`,
          }}
        >
          <div>
            <h1 className="  text-5xl text-sky-900 ">Profile</h1>
            <div className="flex mt-8 m-14 ">
              <p>Home / </p>
              <p className=" mx-2 text-teal-400"> Profile</p>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Banner;
  