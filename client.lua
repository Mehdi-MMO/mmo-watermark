if Config.showWatermark then
    CreateThread(function()
        Wait(1000)
        SendNuiMessage(json.encode {
            type = 'config',
            nametext = Config.name,
            linktext = Config.link,
            nameColor = Config.nameColor,
            linkColor = Config.linkColor,
            logoLink = Config.logoLink
        })
        Wait(2000)
        while true do
            if Config.logoEnabled then
                SendNuiMessage(json.encode {
                    type = 'show',
                    item = 'logo',
                    opacity = Config.logoOpacity
                })

                Wait(Config.cycleTime * 1000)
                Wait(1000)
            end

            if Config.nameEnabled then
                SendNuiMessage(json.encode {
                    type = 'show',
                    item = 'name',
                    opacity = Config.textOpacity
                })

                Wait(Config.cycleTime * 1000)
                Wait(1000)
            end

            if Config.linkEnabled then
                SendNuiMessage(json.encode {
                    type = 'show',
                    item = 'link',
                    opacity = Config.textOpacity
                })

                Wait(Config.cycleTime * 1000)
                Wait(1000)
            end

            SendNuiMessage(json.encode {
                type = 'show',
                item = 'none'
            })

            Wait(Config.restTime * 1000)
        end
    end)
end
