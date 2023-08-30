import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'



export default function Home() {

  useEffect(() => {

    const make_api_request = async () => {
        // package.json da proxy url verdik oradan gelecek önek
        try {

            const request = await fetch("http://127.0.0.1:8000/api/v1/notes", {
                
                headers: {
                    "Content-type": "application/json"
                }
            })
            console.log("data:", request)
            const response = await request.json()
            console.log("data:", response)

        } catch (e) {
            
            console.log("e:", e)
        }



    }


    make_api_request()

  }, [])


  return (
    <>

    <Box w="75%" m="auto" mt={5}>

    <h3>AnaSayfa</h3>
    <hr />


    </Box>
    



    </>
  )
}
