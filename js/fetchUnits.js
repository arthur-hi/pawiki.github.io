let unitList = {
    units: {},
    count: 0
}
unitList.loaded = new Promise(resolve => {
    unitList.resolve = resolve
})
let factions = {}
async function fetchUnits(callback) {
    let fragments = window.location.hash.split('/')
    let hash = window.location.hash
    if (fragments[0] == '#units') {
        window.location.hash = 'loading'
    } else {
        window.location.hash = 'loading'
        hash = 'units'
    }

    $('.units-loading')[0].style.display = null
    let count = {
        current: 0,
        total: 0
    }
    async function updateProgress() {
        count.current++
        $('#units-progress')[0].setAttribute('aria-valuenow', count.current)
        $('#units-progress')[0].style.width = `${(count.current / count.total) * 100}%`
        let style = `font-family: var(--font-head); font-size: 14px`
        $('#units-progress')[0].innerHTML = `<span style="${style}">${count.total-count.current} to go</span>`
        if (count.total == count.current) {
            await new Promise(resolve => setTimeout(resolve, 500))
            $('.units-loading')[0].style.display = "none"
            window.location.hash = hash
        }
    }
    const response = await fetch('/units.json')
    factions.json = JSON.parse(await response.text())
    for (var faction in factions.json) {
        let format = faction.replaceAll(/\s/g, '-').toLowerCase()
        let li = document.createElement('li')
        li.classList.add('mb-1')
        li.innerHTML = `
                    <button class="btn btn-toggle align-items-center text-white rounded collapsed"
                        data-bs-toggle="collapse" data-bs-target="#${format}-collapse" aria-expanded="false"
                        style="text-align: start; width: 100%;">
                        ${faction}
                    </button>
                    <div class="collapse" id="${format}-collapse">
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        </ul>
                    </div>
                `
        $('#unit-list').append(li)
        let collapse = $(`#${format}-collapse`)[0]
        unitList.units[faction] = {}
        for (var unittype in factions.json[faction]) {
            type = unittype.toLowerCase()
            let li = document.createElement('li')
            li.classList.add('mb-1')
            li.innerHTML = `
                        <button class="btn btn-toggle btn-unit align-items-center rounded collapsed"
                            data-bs-toggle="collapse" data-bs-target="#${format}-${type}-collapse" aria-expanded="false"
                            style="text-align: start; width: 100%;">
                            ${unittype}
                        </button>
                        <div class="collapse" id="${format}-${type}-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            </ul>
                        </div>
                    `
            collapse.append(li)
            let _collapse = $(`#${format}-${type}-collapse`)[0]
            unitList.units[faction][unittype] = []
            factions.json[faction][unittype].forEach(async unit => {
                count.total++
                unitList.count++
                $('#units-progress')[0].setAttribute('aria-valuemax', count.total)
                let link = document.createElement('li')
                link.id = `${format}-${type}-${unit}`
                _collapse.children[0].appendChild(link)

            })
        }
    }
    for (var faction in factions.json) {

        let format = faction.replaceAll(/\s/g, '-').toLowerCase()
        let collapse = $(`#${format}-collapse`)[0]

        for (var unittype in factions.json[faction]) {
            type = unittype.toLowerCase()
            let _collapse = $(`#${format}-${type}-collapse`)[0]

            factions.json[faction][unittype].forEach(async (unit, i) => {

                let tools = {}
                tools.loaded = new Promise(resolve => {
                    tools.resolve = resolve
                })

                let data = {
                    "faction": faction,
                    "type": unittype.toLowerCase(),
                    "unit": unit,
                    "factionpath": `resources/units/${faction}`,
                    "unitpath": `resources/units/${faction}/${unittype.toLowerCase()}/${unit}`
                }
                data.unitlistpath = unitList.units[data.faction][unittype]

                let markdown = {
                    "max_range": "",
                    "total_dps": "",

                    "max_speed": "",
                    "acceleration": "",
                    "braking_rate": "",
                    "turn_speed": "",
                    "type": "",

                    "observer": {
                        "sight": [],
                        "radar": [],
                        "radar_jammer": []
                    },

                    "json": "",
                    "recon": "",
                    "tools": ""
                }
                let max_range = 0
                let total_dps = 0

                let id = `${data.faction.replaceAll(/\s/g, '-').toLowerCase()}-${data.type.replaceAll(/\s/g, '-').toLowerCase()}-${data.unit.replaceAll(/\s/g, '-').toLowerCase()}`

                let imgpath = "resources/img/placeholder.png"
                let style = ""

                let testpath = `/resources/img/upscaled/${unit}_icon_buildbar.png`
                let response = await fetch(testpath)
                if (response.ok) imgpath = testpath
                else {
                    let testpath = `/resources/units/${data.faction}/${data.type}/${data.unit}/${data.unit}_icon_buildbar.png`
                    let response = await fetch(testpath)
                    if (response.ok) imgpath = testpath
                }
                style = "style='width: 128px; height: 128px;'"

                // Luther pointed out that this shouldnt be in the for loop but defining this before line 127 breaks code for ?? reason
                /**
                 * Pretty Print JSON Objects.
                 * Inspired by http://jsfiddle.net/unLSJ/
                 *
                 * @return {string}    html string of the formatted JS object
                 * @example:  var obj = {"foo":"bar"};  obj.prettyPrint();
                 */
                 Object.prototype.prettyPrint = function () {
                    var jsonLine = /^( *)("[\w]+": )?("[^"]*"|[\w.+-]*)?([,[{])?$/mg;
                    var replacer = function (match, pIndent, pKey, pVal, pEnd) {
                        var key = '<span class="json-key" style="color: var(--bs-orange)">',
                            val = '<span class="json-value" style="color: var(--bs-blue)">',
                            str = '<span class="json-string" style="color: var(--bs-dark)">',
                            r = pIndent || '';
                        if (pKey)
                            r = r + key + pKey.replaceAll(/[": ]/g, '') + '</span>: ';
                        if (pVal)
                            r = r + (pVal[0] == '"' ? str : val) + pVal + '</span>';
                        return r + (pEnd || '');
                    };

                    return JSON.stringify(this, null, 3)
                        .replaceAll(/&/g, '&amp;').replaceAll(/\\"/g, '&quot;')
                        .replaceAll(/</g, '&lt;').replaceAll(/>/g, '&gt;')
                        .replaceAll(jsonLine, replacer);
                }

                response = await fetch(`${data.unitpath}/${data.unit}.json`);
                let json = JSON.parse(await response.text())                

                if (json.base_spec != undefined) {
                    let split = json.base_spec.split("/")
                    path = split[split.length - 3].toLowerCase();
                    let base_spec = `${path}/${split[split.length - 2]}/${split[split.length - 1]}`

                    const response = await fetch(`${data.factionpath}/${base_spec}`, {
                        method: "HEAD"
                    })
                    if (response.ok) {
                        const response = await fetch(`${data.factionpath}/${base_spec}`)
                        base_spec = JSON.parse(await response.text());
                        markdown.json += `${split.pop()}<pre><code>${await base_spec.prettyPrint()}</code></pre>`
                        json = Object.assign({}, base_spec, json);
                    }

                }
                if (json.description) {
                    json.description = json.description.replaceAll('!LOC:', '')
                }

                let name = json.display_name.replaceAll('!LOC:', '')
                let format = data.unit.replaceAll(/\s/g, '-').toLowerCase()
                let link = document.getElementById(`${data.faction.replaceAll(' ','-').toLowerCase()}-${data.type}-${data.unit}`)
                link.innerHTML =
                    `<a class="link-light rounded text-decoration-none" style="opacity: 0; color: transparent" data-bs-toggle="tooltip" data-bs-placement="right" title="">
                        <img src="${imgpath}" style="position: absolute; left: -16px; top: calc(50% - 16px); width: 32px">
                        <span style="position: relative; left: 16px;">${name}</span>
                    </a>`
                link.children[0].classList.add('collapse-link')
                link.children[0].id = `${format}-link`
                link.style.padding = "10px"

                // Behold the power of jank* code!

                markdown.json += `${data.unit}.json<pre><code>${json.prettyPrint()}</code></pre>`

                async function prep() {
                    updateProgress()

                    if (json.max_health != undefined) {
                        markdown.max_health =
                            `Max Health: <v class="value">${json.max_health}</v><br>`
                    } else markdown.max_health = ""

                    if (json.build_metal_cost != undefined) {
                        markdown.build_metal_cost =
                            `Build Metal Cost: <v class="value">${json.build_metal_cost}</v><br>`
                    } else markdown.build_metal_cost = ""

                    let toolcount = 0
                    if (json.tools != undefined && json.tools.length > 0) {
                        json.tools.forEach(async tool => {
                            let file = tool.spec_id.split("/")
                            let path
                            if (file[2] == 'tools') {
                                path = `${data.factionpath}/tools/${file[file.length - 2]}/${file[file.length - 1]}`
                            } else path = `${data.factionpath}/${data.type.toLowerCase()}/${file[file.length - 2]}/${file[file.length - 1]}`
                            let response = await fetch(`${path}`);
                            let _tool = JSON.parse(await response.text());

                            let isFabber
                            if (_tool.construction_demand != undefined) isFabber = true

                            markdown.json += `${file[file.length - 1]}<pre><code>${_tool.prettyPrint()}</code></pre>`

                            let weapon = {}
                            weapon.name = tool.spec_id.split("/")
                                .pop()
                                .replaceAll(".json", "")
                                .replaceAll(`${data.unit}_`, "")
                                .replaceAll(/_/g, ' ')
                                .replaceAll(/(^\w|\s\w)/g, m => m.toUpperCase());
                            if (_tool.max_range > max_range) {
                                max_range = _tool.max_range
                                markdown.max_range = `Max Range: <v class="value">${max_range}</v><br>`
                            }
                            if (_tool.ammo_id != undefined) {
                                let altfile
                                try {
                                    altfile = _tool.ammo_id.split("/")
                                } catch (error) {
                                    altfile = _tool.ammo_id[0].id.split("/")
                                }
                                let unitpath = altfile[altfile.length - 3].toLowerCase();

                                let ammo = `${data.factionpath}/${unitpath}/${altfile[altfile.length - 2]}/${altfile[altfile.length - 1]}`

                                const response = await fetch(`${ammo}`);

                                let _ammo = JSON.parse(await response.text());
                                markdown.json += `${altfile[altfile.length - 1]}<pre><code>${_ammo.prettyPrint()}</code></pre>`

                                if (_ammo.base_spec != undefined) {
                                    let split = _ammo.base_spec.split("/").pop().replaceAll(".json", "")
                                    const response = await fetch(`${data.factionpath}/ammo/${split}/${split}.json`);

                                    let _ammo_base = JSON.parse(await response.text());
                                    markdown.json += `${split}.json<pre><code>${_ammo_base.prettyPrint()}</code></pre>`
                                }

                                total_dps += _ammo.damage * _tool.rate_of_fire

                                let ppf = 1
                                weapon.layers = _tool.target_layers
                                if (weapon.layers != undefined) {

                                    markdown.tools += `### ${weapon.name}:\n`

                                    markdown.tools += `\nAmmo Damage: <v class="value">${_ammo.damage}</v><br>`
                                    markdown.tools += `Rate of Fire: <v class="value">${_tool.rate_of_fire}</v><br>`

                                    if (tool.projectiles_per_fire != undefined) {
                                        ppf = tool.projectiles_per_fire
                                        markdown.tools += `Projectiles per Fire: <v class="value">${ppf}</v><br>`
                                    }
                                    markdown.tools += `Damage Per Second: <v class="value">${_ammo.damage * _tool.rate_of_fire * ppf}</v><br>\n`

                                    markdown.tools += `\nTarget Layers:\n`
                                    weapon.layers.forEach(layer => {
                                        markdown.tools += `- <v class="value">${layer.replaceAll("WL_","")}</v>\n`
                                    })
                                    if (_ammo.armor_damage_map != undefined) {
                                        markdown.tools += `\nArmor Damage Map:\n`
                                        for (var entry in _ammo.armor_damage_map) {
                                            if (entry != "prettyPrint") {
                                                markdown.tools += `- ${entry.replaceAll("AT_","")}: <v class="value">${_ammo.armor_damage_map[entry]}</v>\n`
                                            }
                                        }
                                    }
                                }

                                total_dps *= ppf
                                markdown.total_dps = `Total DPS: <v class="value">${total_dps}</v><br>`

                            } else if (isFabber) {
                                markdown.tools += `### ${weapon.name}\n\n`
                                if (_tool.max_range != undefined) {
                                    markdown.tools += `Max Range: <v class="value">${_tool.max_range}</v>\n<br>`
                                }

                                markdown.tools += `Energy Consumption: <v class="value">${_tool.construction_demand.energy}</v><br>`
                                markdown.tools += `Metal Consumption: <v class="value">${_tool.construction_demand.metal}</v>\n<br>`

                                if (_tool.reclaim_types != undefined && _tool.reclaim_types.length > 0) {
                                    markdown.tools += `Reclaim Types:`
                                    _tool.reclaim_types.forEach(type => {
                                        markdown.tools += `\n- ${type}`
                                    })
                                }
                            }
                            markdown.tools += `<br>\n`
                            toolcount++
                            if (toolcount == json.tools.length) {
                                tools.resolve("loaded!")
                            }
                        });
                    } else {
                        tools.resolve("loaded!")
                    }

                    if (json.navigation != undefined) {

                        if (json.navigation.move_speed != undefined) {
                            markdown.max_speed =
                                `Max Speed: <v class="value">${json.navigation.move_speed}</v><br>`
                        } else markdown.max_speed = ""

                        if (json.navigation.acceleration != undefined) {
                            markdown.acceleration =
                                `Acceleration: <v class="value">${json.navigation.acceleration}</v><br>`
                        } else markdown.acceleration = ""

                        if (json.navigation.brake != undefined) {
                            markdown.braking_rate =
                                `Braking rate: <v class="value">${json.navigation.brake}</v><br>`
                        } else markdown.braking_rate = ""

                        if (json.navigation.turn_speed != undefined) {
                            markdown.turn_speed =
                                `Turn rate: <v class="value">${json.navigation.turn_speed}</v><br>`
                        } else markdown.turn_speed = ""

                        if (json.navigation.type != undefined) {
                            markdown.type =
                                `Type: <v class="value">${json.navigation.type.charAt(0).toUpperCase() + json.navigation.type.slice(1)}</v><br>`
                        } else markdown.type = ""
                    }

                    if (json.recon != undefined) {
                        json.recon.observer.items.forEach(item => {
                            let name = item.layer.replaceAll(/_/g, ' ').replaceAll(/(^\w|\s\w)/g, m => m.toUpperCase());
                            markdown.observer[item.channel].push(`${name} radius: <v class="value">${item.radius}</v><br>`)
                        });
                    }

                    markdown.storageandproduction = ""

                    if (json.storage != undefined || json.production != undefined) {
                        markdown.storageandproduction += "### Storage & Production\n"

                        if (json.storage != undefined) {
                            markdown.storageandproduction += "#### Storage:\n"
                            if (json.storage.energy != undefined) {
                                markdown.storageandproduction += `Energy: <v class="value">${json.storage.energy}</v><br>`
                            }
                            if (json.storage.metal != undefined) {
                                markdown.storageandproduction += `Metal: <v class="value">${json.storage.metal}</v><br>`
                            }
                        }
                        if (json.production != undefined) {
                            markdown.storageandproduction += "#### Production:\n"
                            if (json.production.energy != undefined) {
                                markdown.storageandproduction += `Energy: <v class="value">${json.production.energy}</v><br>`
                            }
                            if (json.production.metal != undefined) {
                                markdown.storageandproduction += `Metal: <v class="value">${json.production.metal}</v><br>`
                            }
                        }

                    }
                }

                prep().then(async () => {

                    markdown.navigation = ""
                    if (json.navigation != undefined) {
                        markdown.navigation =
                            `### Navigation
${markdown.type}
${markdown.max_speed}
${markdown.acceleration}
${markdown.braking_rate}
${markdown.turn_speed}`
                    }

                    if (markdown.observer.sight.length > 0) {
                        markdown.recon +=
                            `#### Sight
`
                        markdown.observer.sight.forEach(item => {
                            markdown.recon += item
                        })
                    }

                    if (markdown.observer.radar.length > 0) {
                        markdown.recon +=
                            `\n
#### Radar
`
                        markdown.observer.radar.forEach(item => {
                            markdown.recon += item
                        })
                    }

                    if (markdown.observer.radar_jammer.length > 0) {
                        markdown.recon +=
                            `\n
#### Radar Jamming
`
                        markdown.observer.radar_jammer.forEach(item => {
                            markdown.recon += item
                        })
                    }

                    markdown.unit_types = ""
                    if (json.unit_types != undefined) {
                        markdown.unit_types =
                            `### Unit Types
`
                        json.unit_types.forEach(item => {
                            let type = item.replaceAll('UNITTYPE_', '')
                            markdown.unit_types += (` - <v class="value">${type}</v>
`)
                        });
                    }

                    if (json.armor_type != undefined) {
                        markdown.armor_type =
                            `Armor Type: <v class="value">${json.armor_type.replaceAll("AT_","")}</v><br>`
                    } else markdown.armor_type = ""


                    if (data.type == "commanders") {
                        imgpath = `/resources/img/${data.type}/img_${data.unit}.png`
                        style = ""
                    }

                    let element = document.createElement('div')
                    element.id = `${format}.md`
                    element.classList.add('hidden')
                    element.classList.add('doc')
                    element.classList.add('unit-doc')
                    element.classList.add('d-none')
                    var converter = new showdown.Converter();
                    converter.setOption('literalMidWordAsterisks', true)
                    converter.setOption('literalMidWordUnderscores', true)

                    $('#units-content')[0].appendChild(element)

                    $('#units-intro')[0].classList.remove('hidden')
                    $('#units-intro')[0].classList.remove('d-none')

                    link.addEventListener('click', async () => {
                        
                        let hash = `#units/${data.faction.replaceAll(' ','-').toLowerCase()}/${data.type}/${data.unit}`
                        lastHash = hash
                        window.location.hash = hash

                        $('.collapse-link').each(function () {
                            $(this)[0].style = "color: var(--bs-gray-500)"
                        })
                        link.children[0].style = "color: #f1662f"

                        $('.unit-doc').addClass('hidden');
                        element.classList.remove('d-none');

                        await new Promise(r => setTimeout(r, 1))
                        // Fix for loading too fast
                        element.classList.remove('d-none');

                        element.classList.add('visible');
                        element.classList.remove('hidden');
                    })

                    element.addEventListener('click', function () {
                        hideSidebar()
                    })

                    link.children[0].style = "color: var(--bs-gray-500)"
                    link.style.position = 'relative'
                    link.style.top = "10px"
                    link.style.left = "10px"

                    object = { 
                        'faction': data.faction ,
                        'fileName': unit,
                        'unitName': link.children[0].children[1].innerText,
                        'unitType': data.type,
                        'element': link,
                    }
                    data.unitlistpath.push(object)
                    unitList.count--
                    if (object.fileName.startsWith('l_')) object.faction = 'Legion'
                    try {

                        if (json.unit_types.includes('UNITTYPE_Titan')) {
                            object.unitType = 'Titan'
                        }
                        else if (json.unit_types.includes('UNITTYPE_Factory')) {
                            object.unitType = 'Factory'
                        }
                        else if (json.unit_types.includes('UNITTYPE_Air')) {
                            object.unitType = 'Air'
                        }
                        else if (json.unit_types.includes('UNITTYPE_Bot')) {
                            object.unitType = 'Bot'
                        }
                        else if (json.unit_types.includes('UNITTYPE_Tank')) {
                            object.unitType = 'Tank'
                        }
                        else if (json.unit_types.includes('UNITTYPE_Naval')) {
                            object.unitType = 'Naval'
                        }
                        else if (json.unit_types.includes('UNITTYPE_Orbital')) {
                            object.unitType = 'Orbital'
                        }
                        else if (json.unit_types.includes('UNITTYPE_Defense')) {
                            object.unitType = 'Defense'
                        }
                        else if (json.unit_types.includes('UNITTYPE_Offense')) {
                            object.unitType = 'Offense'
                        }
                        else if (json.unit_types.includes('UNITTYPE_Economy')) {
                            object.unitType = 'Economy'
                        }
                        else if (json.unit_types.includes('UNITTYPE_Structure')) {
                            object.unitType = 'Structure'
                        }

                    } catch (error) {
                        // I rly rly need to work on fixing commanders
                    }

                    if (unitList.count==0) unitList.resolve()
                    await tools.loaded
                    markdown.content =
                        `# ${name}
<img src="${imgpath}" ${style}>
<br>
#### ${json.description}\n
<div class="form-check form-switch">
<label class="form-check-label" for="${id}-switch">View RAW File</label>
<input class="form-check-input" type="checkbox" id="${id}-switch" disabled>
</div>
<div class="hidden" id="${id}-json">
<br>${markdown.json}
</div><br>
### Overview
${markdown.max_health}
${markdown.build_metal_cost}
${markdown.armor_type}
${markdown.max_range}
${markdown.total_dps}
${markdown.navigation}
${markdown.storageandproduction}
### Recon
${markdown.recon}
${markdown.unit_types}
${markdown.tools}
`
                    html = converter.makeHtml(markdown.content);
                    element.innerHTML = html
                    let copy = document.createElement('div')
                    copy.style.position = 'absolute'
                    copy.style.top = `${36 - (window.innerHeight/100)}px`
                    copy.innerHTML =
                        `<span class="material-symbols-outlined" id="url">
                        link
                    </span>`
                    element.appendChild(copy)
                    let faction = data.faction.replaceAll(' ', '-').toLowerCase()
                    let local = location.protocol + '//' + location.host
                    copy.setAttribute('url', `${local}/#units/${faction}/${data.type}/${data.unit}`)

                    document.getElementById(`${id}-switch`).addEventListener('click', function () {
                        if (this.checked) {
                            document.getElementById(`${id}-json`).classList = "visible"
                        } else
                            document.getElementById(`${id}-json`).classList = "hidden"
                    })

                    document.getElementById(`${id}-switch`).removeAttribute('disabled')

                    copy.addEventListener('click', async function () {

                        await new Promise(r => setTimeout(r, 250))
                        copy.innerHTML =
                            `<span class="material-symbols-outlined" id="tick">
                            check
                        </span>`
                        navigator.clipboard.writeText(copy.getAttribute('url'))
                    })
                    copy.addEventListener('mouseleave', async function () {
                        await new Promise(r => setTimeout(r, 5000))
                        copy.innerHTML =
                            `<span class="material-symbols-outlined" id="url">
                            link
                        </span>`
                    })

                    setInterval(() => {
                        copy.style.left = `${element.firstChild.getBoundingClientRect().width + 24}px`
                    }, 250)
                })

            })
            let br = document.createElement('br')
            _collapse.appendChild(br)
        }
        let br = document.createElement('br')
        collapse.appendChild(br)
    }
    callback()
}