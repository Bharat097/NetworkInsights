import sys
from splunklib.searchcommands import dispatch, StreamingCommand, Configuration, Option, validators

@Configuration()
class Populatelookup(StreamingCommand):

    def stream(self, records):
        try:
            with open ("logfile.txt","a+") as logfile:
                devices_from_query = set()
                devices_from_lookup = set()
                logfile.write("Start \n")
                for record in records:
                    devices_from_query.add(record["macAddress"])
                logfile.write("device from query populated \n")
                with open("../lookups/devices.csv", "r+") as devicesfile:
                    current_devices = devicesfile.read().replace("\"","")
                    current_devices = current_devices.split("\n")[1:]
                    devices_from_lookup = set(current_devices)
                logfile.write("device from lookup populated "+ str(devices_from_query)+" "+ str(devices_from_lookup)  +" \n" )
                new_devices_set = devices_from_query - devices_from_lookup
                logfile.write("Total device set populated " +str(new_devices_set)+"\n")
                for device in new_devices_set:
                    logfile.write("inside totaldevice loop \n")
                    yield {'macAddress': '{}'.format(device)}
        except Exception as e:
            with open("Command_log_exception.txt", "w") as logfile:
                logfile.write("Error " + e.message)

            yield{"Error": e}

if __name__ == "__main__":
    dispatch(Populatelookup, sys.argv, sys.stdin, sys.stdout, __name__)
