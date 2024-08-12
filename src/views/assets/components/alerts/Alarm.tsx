import React, { useState, useEffect } from 'react'

const Alarm = () => {
  const [username, setUsername] = useState('')
  const [notifyTime, setNotifyTime] = useState<any>(new Date())
  const [cTime, setCtime] = useState(50)

  useEffect(() => {
    setTimeout(() => {
        setCtime(20000)
        setNotifyTime(new Date())
        if (!username) return
        // get notification
    }, cTime)

  }, [notifyTime])
  return (
    <div>Alarm</div>
  )
}

export default Alarm