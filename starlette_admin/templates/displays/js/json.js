$("#{{field.name}}").append(pretty_print_json(JSON.parse(JSON.stringify({{data | tojson |safe}}))));