function getSelection(tableId) {
  let grid = document.getElementById(tableId);
  let checkBoxes = grid.getElementsByTagName('INPUT');

  // Loop through the checkboxes
  let result = {};
  for (let index = 0; index < checkBoxes.length; index++) {
    
    if (checkBoxes[index].checked) {
      let row = checkBoxes[index].parentNode.parentNode.parentNode;
      result += row.cells[1].innerHTML;
    }
  }

  return result;
}

// Show calendar page
function showCalendar(events) {
    var div = document.createElement('div');
  
    div.appendChild(createElement('h1', null, 'Calendar'));
  
    var table = createElement('table', 'table');
    div.appendChild(table);
  
    var thead = document.createElement('thead');
    table.appendChild(thead);
  
    var headerrow = document.createElement('tr');
    thead.appendChild(headerrow);
  
    var organizer = createElement('th', null, 'Organizer');
    organizer.setAttribute('scope', 'col');
    headerrow.appendChild(organizer);
  
    var subject = createElement('th', null, 'Subject');
    subject.setAttribute('scope', 'col');
    headerrow.appendChild(subject);
  
    var start = createElement('th', null, 'Start');
    start.setAttribute('scope', 'col');
    headerrow.appendChild(start);
  
    var end = createElement('th', null, 'End');
    end.setAttribute('scope', 'col');
    headerrow.appendChild(end);
  
    var tbody = document.createElement('tbody');
    table.appendChild(tbody);
  
    for (const event of events.value) {
      var eventrow = document.createElement('tr');
      eventrow.setAttribute('key', event.id);
      tbody.appendChild(eventrow);
  
      var organizercell = createElement('td', null, event.organizer.emailAddress.name);
      eventrow.appendChild(organizercell);
  
      var subjectcell = createElement('td', null, event.subject);
      eventrow.appendChild(subjectcell);
  
      var startcell = createElement('td', null,
        moment.utc(event.start.dateTime).local().format('M/D/YY h:mm A'));
      eventrow.appendChild(startcell);
  
      var endcell = createElement('td', null,
        moment.utc(event.end.dateTime).local().format('M/D/YY h:mm A'));
      eventrow.appendChild(endcell);
    }
  
    mainContainer.innerHTML = '';
    mainContainer.appendChild(div);
  }
  
  // Show device configuration page
  function showConfigurationProfiles(configurationProfiles) {
  
    const tableId = 'configTable';

    var containerdiv = document.createElement('div');
    containerdiv.setAttribute('class', 'container');
  
    var rowdiv = document.createElement('div');
    rowdiv.setAttribute('class', 'row');
  
    var div = document.createElement('div');
    div.setAttribute('class', 'col-12');
  
    containerdiv.appendChild(createElement('h1', null, 'Configuration Profiles'));
  
    var table = createElement('table', 'table');
    table.setAttribute('class', 'table table-bordered');
    table.setAttribute('id', tableId);
    div.appendChild(table);
  
    var thead = document.createElement('thead');
    table.appendChild(thead);
  
    var headerrow = document.createElement('tr');
    thead.appendChild(headerrow);
  
    var selection = createElement('th', null, 'Selection');
    headerrow.appendChild(selection);
  
    var idname = createElement('th', null, 'Id');
    headerrow.appendChild(idname);
  
    var displayname = createElement('th', null, 'Display Name');
    // organizer.setAttribute('scope', 'col');
    headerrow.appendChild(displayname);
  
    var tbody = document.createElement('tbody');
    table.appendChild(tbody);
  
    var rowCount = 1;
  
    for (const configuration of configurationProfiles.value) {
  
      // Counter to name check boxes
      var customCheck = 'customCheck' + rowCount;
  
      var configrow = document.createElement('tr');
      configrow.setAttribute('key', configuration.id);
      tbody.appendChild(configrow);
  
      var configdiv = document.createElement('div');
      configdiv.setAttribute('class', 'custom-control custom-checkbox');
  
      var configInput = document.createElement('input');
      configInput.setAttribute('type', 'checkbox');
      configInput.setAttribute('class', 'custom-control-input');
      configInput.setAttribute('id', customCheck);
      configdiv.appendChild(configInput);
  
      var configLabel = document.createElement('label', rowCount);
      configLabel.setAttribute('class', 'custom-control-label');
      configLabel.setAttribute('for', customCheck);
      configdiv.appendChild(configLabel);
  
      // configrow.appendChild(configdiv);
  
      var selectioncell = createElement('td');
      selectioncell.appendChild(configdiv);
      configrow.appendChild(selectioncell);
  
      var idcell = createElement('td', null, configuration.id);
      configrow.appendChild(idcell);
  
      var namecell = createElement('td', null, configuration.displayName);
      configrow.appendChild(namecell);
  
      rowCount++;
    }

    //Get bottom HTML div
    let exportButton = createElement('button', 'btn btn-primary btn-large', 'Export');
    exportButton.setAttribute('id', 'exportButton');
    exportButton.setAttribute('onclick', 'getSelection();');
    div.appendChild(exportButton);

    mainContainer.innerHTML = '';
    mainContainer.appendChild(div);
  }