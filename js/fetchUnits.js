let unitlist = []
let factions = {}

async function fetchUnits(callback) {
    $('.units-loading')[0].style.display = null
    let count = {
        current: 0,
        total: 0
    }

    async function updateProgress() {
        count.current++
        $('.progress-bar')[0].setAttribute('aria-valuenow', count.current)
        $('.progress-bar')[0].style.width = `${(count.current / count.total) * 100}%`
        let style = `font-family: var(--font-head); font-size: 14px`
        $('.progress-bar')[0].innerHTML = `<span style="${style}">${count.total-count.current} to go</span>`
        if (count.total==count.current) {
            //$('.progress-bar')[0].innerHTML = `<span style="${style}">done</span>`
            await new Promise(resolve => setTimeout(resolve, 500))
            $('.units-loading')[0].style.display = "none"
        }
    }

    const response = await fetch('/units.json');
    
    factions.json = JSON.parse(await response.text());

    for (var faction in factions.json) {
        for (var unittype in factions.json[faction]) {
            factions.json[faction][unittype].forEach(async () => {
                count.total++
                $('.progress-bar')[0].setAttribute('aria-valuemax', count.total)
            })
        }
    }

    for (var faction in factions.json) {

        let format = faction.replace(/\s/g, '-');

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

        for (var unittype in factions.json[faction]) {
            let li = document.createElement('li')
            li.classList.add('mb-1')
            li.innerHTML = `
                        <button class="btn btn-toggle btn-unit align-items-center rounded collapsed"
                            data-bs-toggle="collapse" data-bs-target="#${format}-${unittype}-collapse" aria-expanded="false"
                            style="text-align: start; width: 100%;">
                            ${unittype}
                        </button>
                        <div class="collapse" id="${format}-${unittype}-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            </ul>
                        </div>
                    `
            collapse.append(li)
            let _collapse = $(`#${format}-${unittype}-collapse`)[0]

            factions.json[faction][unittype].forEach(async unit => {

                let data = {
                    "faction": faction,
                    "type": unittype.toLowerCase(),
                    "unit": unit,
                    "factionpath": `resources/units/${faction}`,
                    "unitpath": `resources/units/${faction}/${unittype.toLowerCase()}/${unit}`,
                }

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

                let id = `${faction.replace(/\s/g, '-')}-${unittype.toLowerCase().replace(/\s/g, '-')}-${unit.replace(/\s/g, '-')}`

                let imgpath
                let style = ""
                if (unittype == "commanders") imgpath = `/resources/img/${unittype.toLowerCase()}/img_${unit}.png`
                else {
                    imgpath = `/resources/units/${faction}/${unittype.toLowerCase()}/${unit}/${unit}_icon_buildbar.png`
                    style = "style='width: 100px; height: 100px;'"
                }

                const response = await fetch(`${data.unitpath}/${data.unit}.json`);
                
                let json = JSON.parse(await response.text())

                if (json.base_spec != undefined) {
                    let split = json.base_spec.split("/")
                    path = split[split.length - 3].toLowerCase();
                    let base_spec = `${path}/${split[split.length - 2]}/${split[split.length - 1]}`
                    const response = await fetch(`${data.factionpath}/${base_spec}`);
                    
                    base_spec = JSON.parse(await response.text());
                    markdown.json += `${split.pop()}<pre><code>${base_spec.prettyPrint()}</code></pre>`
                    json = Object.assign({}, base_spec, json);
                }

                let name = json.display_name.replace('!LOC:', '');
                let format = data.unit.replace(/\s/g, '-');
                let link = document.createElement('li')
                link.innerHTML =
                    `<a class="link-light rounded text-decoration-none" style="opacity: 0; color: transparent">
                        <img src="${imgpath}" style="position: absolute; left: -16px; top: calc(50% - 16px); width: 32px">
                        <span style="position: relative; left: 16px">${name}</span>
                    </a>`
                link.children[0].classList.add('collapse-link')
                link.children[0].id = `${format}-link`
                link.style.padding = "10px"
                _collapse.children[0].appendChild(link)

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
                            r = r + key + pKey.replace(/[": ]/g, '') + '</span>: ';
                        if (pVal)
                            r = r + (pVal[0] == '"' ? str : val) + pVal + '</span>';
                        return r + (pEnd || '');
                    };

                    return JSON.stringify(this, null, 3)
                        .replace(/&/g, '&amp;').replace(/\\"/g, '&quot;')
                        .replace(/</g, '&lt;').replace(/>/g, '&gt;')
                        .replace(jsonLine, replacer);
                }

                // Behold the power of bad code!

                markdown.json += `${data.unit}.json<pre><code>${json.prettyPrint()}</code></pre>`

                async function prep() {
                    if (json.max_health != undefined) {
                        markdown.max_health =
                            `Max Health: <v class="value">${json.max_health}</v><br>`
                    } else markdown.max_health = ""

                    if (json.build_metal_cost != undefined) {
                        markdown.build_metal_cost =
                            `Build Metal Cost: <v class="value">${json.build_metal_cost}</v><br>`
                    } else markdown.build_metal_cost = ""

                    if (json.tools != undefined) {

                        markdown.tools = `### Tools
`
                        json.tools.forEach(async tool => {
                            let file = tool.spec_id.split("/")
                            let path
                            if (file[2] == 'tools') {
                                path = `${data.factionpath}/tools/${file[file.length - 2].toLowerCase()}/${file[file.length - 1]}`
                            } else path = `${data.factionpath}/${data.type}/${file[file.length - 2].toLowerCase()}/${file[file.length - 1]}`

                            let response = await fetch(`${path}`);
                            
                            let _tool = JSON.parse(await response.text());
                            markdown.json += `${file[file.length - 1]}<pre><code>${_tool.prettyPrint()}</code></pre>`

                            let weapon = {}
                            weapon.name = tool.spec_id.split("/")
                                .pop()
                                .replace(".json", "")
                                .replace(`${data.unit}_`, "")
                                .replace(/_/g, ' ')
                                .replace(/(^\w|\s\w)/g, m => m.toUpperCase());
                            if (_tool.max_range > max_range) {
                                max_range = _tool.max_range
                                markdown.max_range = `Max Range: <v class="value">${max_range}</v><br>`

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
                                        let split = _ammo.base_spec.split("/").pop().replace(".json", "")
                                        const response = await fetch(`${data.factionpath}/ammo/${split}/${split}.json`);
                                        
                                        let _ammo_base = JSON.parse(await response.text());
                                        markdown.json += `${split}.json<pre><code>${_ammo_base.prettyPrint()}</code></pre>`
                                    }

                                    total_dps += _ammo.damage * _tool.rate_of_fire
                                    markdown.total_dps = `Total DPS: <v class="value">${total_dps}</v><br>`

                                    weapon.layers = _tool.target_layers
                                    if (weapon.layers != undefined) {

                                        markdown.tools += `#### ${weapon.name}:\n`

                                        markdown.tools += `\nAmmo Damage: ${_ammo.damage}<br>`
                                        markdown.tools += `Rate of Fire: ${_tool.rate_of_fire}<br>`
                                        markdown.tools += `Damage Per Second: ${_ammo.damage * _tool.rate_of_fire}<br>\n`

                                        markdown.tools += `\nTarget Layers:\n`
                                        weapon.layers.forEach(layer => {
                                            markdown.tools += `- ${layer.replace("WL_","")}\n`
                                        })
                                        if (_ammo.armor_damage_map != undefined) {
                                            markdown.tools += `\nArmor Damage Map:\n`
                                            for (var entry in _ammo.armor_damage_map) {
                                                if (entry != "prettyPrint") {
                                                    markdown.tools += `- ${entry.replace("AT_","")}: <v class="value">${_ammo.armor_damage_map[entry]}</v>\n`
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        });
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
                                `Navigation type: <v class="value">${json.navigation.type.charAt(0).toUpperCase() + json.navigation.type.slice(1)}</v><br>`
                        } else markdown.type = ""
                    }

                    if (json.recon != undefined) {
                        json.recon.observer.items.forEach(item => {
                            let name = item.layer.replace(/_/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase());
                            markdown.observer[item.channel].push(`${name} radius: <v class="value">${item.radius}</v><br>`)
                        });
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
                            let type = item.replace('UNITTYPE_', '')
                            markdown.unit_types += (` - <v class="value">${type}</v>
`)
                        });
                    }

                    if (json.armor_type != undefined) {
                        markdown.armor_type =
                            `Armor Type: <v class="value">${json.armor_type.replace("AT_","")}</v><br>`
                    } else markdown.armor_type = ""

                    markdown.content =
                        `# ${name}
<img src="${imgpath}" ${style}>
<br>
#### ${json.description.replace('!LOC:', '')}\n
<div class="form-check form-switch">
<label class="form-check-label" for="${id}-switch">View RAW File</label>
<input class="form-check-input" type="checkbox" id="${id}-switch">
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

### Recon
${markdown.recon}

${markdown.unit_types}
${markdown.tools}
`

                    let element = document.createElement('div')
                    element.id = `${format}.md`
                    element.classList.add('hidden')
                    element.classList.add('doc')
                    element.classList.add('unit-doc')
                    element.classList.add('d-none')
                    var converter = new showdown.Converter();
                    converter.setOption('literalMidWordAsterisks', true)
                    converter.setOption('literalMidWordUnderscores', true)
                    html = converter.makeHtml(markdown.content);
                    element.innerHTML = html
                    $('#units-content')[0].appendChild(element)
                    
                    $('#units-intro')[0].classList.remove('hidden')
                    $('#units-intro')[0].classList.remove('d-none')

                    link.addEventListener('click', async () => {

                        $('.collapse-link').each(function () {
                            $(this)[0].style = "color: var(--bs-gray-500)"
                        })
                        link.children[0].style = "color: #f1662f"

                        $('.unit-doc').addClass('hidden');
                        element.classList.remove('d-none');
                        await new Promise(resolve => setTimeout(resolve, 1))
                        // second d-none just to be safe
                        element.classList.remove('d-none');
                        element.classList.add('visible');
                        element.classList.remove('hidden');
                    })

                    element.addEventListener('click', function () {
                        hideSidebar()
                    })

                    $(`#${id}-switch`).on('change', function () {
                        if (this.checked) {
                            $(`#${id}-json`)[0].classList = "visible"
                        } else
                            $(`#${id}-json`)[0].classList = "hidden"
                    })

                    link.children[0].style = "color: var(--bs-gray-500)"
                    link.style.position = 'relative'
                    link.style.top = "10px"
                    link.style.left = "10px"

                    // This should force this to come once the unit is entirely loaded
                    await new Promise(resolve => setTimeout(resolve, 1))
                    updateProgress()
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