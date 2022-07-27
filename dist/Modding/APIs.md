<h1>
    APIs
</h1>
<p class="text-secondary">extracts from the now archived <a href="https://wiki.palobby.com/wiki" target="_blank">wiki.palobby</a>
</p>

## mods

##### deprecated: api.mods.getMountedMods( context, callback )
Returns a list of mounted mod in context. 


arguments | mandatory | type | description
context | ``true`` | ``string`` | client or server 
callback | ``true`` | ``function(data)`` | data contains an array of modinfo objects 
```
api.mods.getMountedMods('client',function(data){console.log(data);});
```

##### api.mods.getMounted( context, raw )

arguments | mandatory | type | description
context | ``true`` | ``string`` | client or server 
raw | ``false`` | ``bollean`` | true to return full modinfo objects 

Returns:
type | description
Promise | object with a single property mounted_mods which contains an array of modinfo objects 
```
api.mods.getMounted('client',true).always(function(data){console.log(data);});
```
<br>

## net

Do **NOT** use these API directly.

The preferred approach is to make use of the connect to game scene. 

##### api.net.startGame( region, mode )

arguments | mandatory | type | description
region | ``true`` | ``string`` | uber region: ``Australia``, ``USCentral`` or ``EUWest`` 
mode | ``true`` | ``string`` | ``Config`` or ``gw`` optionally prefixed with content eg ``PAExpansion1:Config`` for Titans 

Returns:
value | type | description
LobbyId | `string` | unique game identifier 
ServerHostName | ``string`` | hostname or IP address 
ServerPort | ``string`` | port number 
Ticket | ``string`` | uber game ticket 
Expires | ``string`` | ISO 8601 UTC timestamp 

##### api.net.joinGame( lobbyId )
Joins an Uber game based on a lobbyId. 

Returns:
value | type | description
LobbyId | ``string`` | unique game identifier 
ServerHostName | ``string`` | hostname or IP address 
ServerPort | ``string`` | port number 
Ticket | ``string`` | uber game ticket 
Expires | ``string`` | ISO 8601 UTC timestamp 

Internally retries 5 times baaed on PollWaitTimeMS.

Currently never returns if invalid lobbyId. 

#### api.net.connect( argument )
Connects to a game server. 

arguments | mandatory | type | description
host | ``true`` | ``string`` | hostname or IP address 
port | ``true`` | ``string`` | port number 
display_name | ``true`` | ``string`` | 
ticket | ``true`` *for uber servers* | ``string`` | returned from startGame or joinGame 
with_content | ``false`` | ``string`` | PAExpansion1 for Titans 
clientData | ``true`` *for uber servers* | ``object`` | ***see below***

clientData: 
value | mandatory | type | description
password | ``false`` | ``object`` |
value | ``true`` *for uber servers* | ``string`` | unique player identifier 
value | ``false`` | ``string`` | unique game identifier for invites to private game 

One of the following handlers should be fired:

 * login_accepted
 * login_rejected