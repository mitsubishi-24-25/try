fetch('json/Sep_Clean-Up.json')
  .then(response => response.json())
  .then(data => {

    const container1 = document.getElementById('Officer');
    const container2 = document.getElementById('Member');

    data.v1.forEach(student => {
      const row = document.createElement('div');
      row.className = 'row gx-2';
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container1.appendChild(row);
    });

    data.v2.forEach(student => {
      const row = document.createElement('div');
      row.className = 'row gx-2';
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container2.appendChild(row);
    });

  });

fetch('json/Third_Quarter_NSED.json')
  .then(response => response.json())
  .then(data => {

    const container1 = document.getElementById('SERT-3nsed');
    const container2 = document.getElementById('SERT-Member-3nsed');

    data.ver1.forEach(student => {
      const row = document.createElement('div');
      row.className = 'row gx-2';
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container1.appendChild(row);
    });

    data.ver2.forEach(student => {
      const row = document.createElement('div');
      row.className = 'row gx-2';
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container2.appendChild(row);
    });
  });

fetch('json/Parent-Teacher_Conference.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('SERT-pta');
    data.forEach(student => {
      const row = document.createElement('div');
      row.className = 'row gx-2';
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container.appendChild(row);
    });
  });

fetch('json/wins.json')
  .then(response => response.json())
  .then(data => {

    const container0 = document.getElementById("Clubs-wins");
    const container1 = document.getElementById('SERT-wins');
    const container2 = document.getElementById('SERT-Member-wins');
    const container3 = document.getElementById('SSLG-wins');
    const container4 = document.getElementById('Scouts-wins');

    data.Clubs.forEach(student => {
      const row = document.createElement('div');
      row.className = 'row gx-2';
      row.innerHTML = `
        <div class="col-12">${student.name}</div>
      `;
      container0.appendChild(row);
    });


    data.Officers.forEach(student => {
      const row = document.createElement('div');
      row.className = 'row gx-2';
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container1.appendChild(row);
    });

    data.Members.forEach(student => {
      const row = document.createElement('div');
      row.className = 'row gx-2';
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container2.appendChild(row);
    });

    data.SSLG.forEach(student => {
      const row = document.createElement('div');
      row.className = 'row gx-2';
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container3.appendChild(row);
    });

    data.Scouts.forEach(student => {
      const row = document.createElement('div');
      row.className = 'row gx-2';
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container4.appendChild(row);
    });

  });

fetch('json/SSS-Aug.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('SSS-Aug');
    data.forEach(student => {
      const row = document.createElement('div');
      row.className = 'row gx-2';
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container.appendChild(row);
    });
  });

fetch('json/August Clean-Up.json')
  .then(response => response.json())
  .then(data => {

    const container1 = document.getElementById('Officer');
    const container2 = document.getElementById('Member');

    data.v1.forEach(student => {
      const row = document.createElement('div');
      row.className = 'row gx-2';
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container1.appendChild(row);
    });

    data.v2.forEach(student => {
      const row = document.createElement('div');
      row.className = 'row gx-2';
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container2.appendChild(row);
    });

  });

fetch('json/Back-To-School.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('Back-To-School');
    data.forEach(student => {
      const row = document.createElement('div');
      row.className = 'row gx-2';
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container.appendChild(row);
    });
  });

fetch('json/July Clean-Up.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('July_Clean-Up');
    data.forEach(student => {
      const row = document.createElement('div');
      row.className = 'row gx-2';
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container.appendChild(row);
    });
  });

fetch('json/SSS-July.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('SSS-July');
    data.forEach(student => {
      const row = document.createElement('div');
      row.className = 'row gx-2';
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container.appendChild(row);
    });
  });

fetch('json/Project_ALAGA.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('Project_ALAGA');
    data.forEach(student => {
      const row = document.createElement('div');
      row.className = 'row gx-2';
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container.appendChild(row);
    });
  });

fetch('json/Symposium_AP.json')
  .then(response => response.json())
  .then(data => {

    const container1 = document.getElementById('Symposium_AP');
    const container2 = document.getElementById('Member1');
    const container3 = document.getElementById('Member2');

    data.Symposium_AP.forEach(student => {
      const row = document.createElement('div');
      row.className = 'row gx-2';
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container1.appendChild(row);
    });

    data.ver1.forEach(student => {
      const row = document.createElement('div');
      row.className = 'row gx-2';
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container2.appendChild(row);
    });

    data.ver2.forEach(student => {
      const row = document.createElement('div');
      row.className = 'row gx-2';
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container3.appendChild(row);
    });
  });

fetch('json/Gawad_Kalasag.json')
  .then(response => response.json())
  .then(data => {

    const container0 = document.getElementById("Clubs");
    const container1 = document.getElementById('SERT');
    const container2 = document.getElementById('SERT-Member');
    const container3 = document.getElementById('SSLG');
    const container4 = document.getElementById('BoyScout');

    data.Clubs.forEach(student => {
      const row = document.createElement('div');
      row.className = 'row gx-2';
      row.innerHTML = `
        <div class="col-12">${student.name}</div>
      `;
      container0.appendChild(row);
    });


    data.Officers.forEach(student => {
      const row = document.createElement('div');
      row.className = 'row gx-2';
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container1.appendChild(row);
    });

    data.Members.forEach(student => {
      const row = document.createElement('div');
      row.className = 'row gx-2';
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container2.appendChild(row);
    });

    data.SSLG.forEach(student => {
      const row = document.createElement('div');
      row.className = 'row gx-2';
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container3.appendChild(row);
    });

    data.BoyScout.forEach(student => {
      const row = document.createElement('div');
      row.className = 'row gx-2';
      row.innerHTML = `
        <div class="col-8">${student.name}</div>
        <div class="col-4">${student.section}</div>
      `;
      container4.appendChild(row);
    });

  });
