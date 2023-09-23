function SendLoad(time, text)
    SendNUIMessage({
        type = "ui",
        show = true,
        time = time,
        text = text
    })
end