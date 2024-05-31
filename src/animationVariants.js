export const overlayVariants = {
    visible: { 
      opacity: 1,
      scale: 1,
      transition: { duration: 0.1 }, // You can adjust the duration here
      
     
     
    },
    hidden: { 
      opacity: 0,
      scale: 1,
      transition: { duration: 0.1 },// You can adjust the duration here
     
      
    },
    exit: { 
      opacity: 0,
      scale: 1,
      transition: { duration: 0.2 }, // You can adjust the duration here
     
    }
  }

  export const modalVariants = {
    visible: { 
    //   opacity: 1,
      scale: 1,
      transition: { duration: 0.2 }, // You can adjust the duration here
      
     
     
    },
    hidden: { 
    //   opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 },// You can adjust the duration here
     
      
    },
    exit: { 
    //   opacity: 0,
      scale: 1,
      transition: { duration: 0.2 }, // You can adjust the duration here
     
    }
  }

  export const navSearch = {
    visible: { 
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }, // You can adjust the duration here
      x: '-50%',
      y: '-50%'
     
     
    },
    hidden: { 
      opacity: 0,
      scale: 1.2,
      transition: { duration: 0.4 },// You can adjust the duration here
      x: '-50%',
      y: '-50%'
      
    },
    exit: { 
      opacity: 0,
      scale: 1,
      transition: { duration: 0.4 }, // You can adjust the duration here
      x: '-50%',
      y: '-50%'
    }
  }