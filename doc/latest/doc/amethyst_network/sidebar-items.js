initSidebarItems({"enum":[["ConnectionState","The state of the connection."],["NetEvent","The basic network events shipped with amethyst."]],"fn":[["send_event","Sends an event to the target NetConnection using the provided network Socket. The socket has to be bound."]],"struct":[["FilterConnected","A filter that checks if the incoming event is from a connected client."],["NetConnection","A network connection target data."],["NetIdentity","A network identity. It can represent either a client or a server. It represents anything that can own an entity or a component. Think of it as an identity card. When used as a resource, it designates the local network uuid."],["NetSocketSystem","The System managing the network state and connections. The T generic parameter corresponds to the network event type. Receives events and filters them. Received events will be inserted into the NetReceiveBuffer resource. To send an event, add it to the NetSendBuffer resource."],["NetworkBundle","A convenience bundle to create the infrastructure needed to send and receive network messages."]],"trait":[["NetFilter","Network filter base trait providing an event filtering interface."]]});