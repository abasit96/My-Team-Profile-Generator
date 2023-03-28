const generateManager = manager => {
    return `
            <div class="card m-5 shadow p-0" style="width:300px">
                <div class="card-header bg-dark text-white">
                    <h3>${manager.getName()}</h3>
                    <h4>
                      <i class="fas fa-mug-hot pr-3"></i> ${manager.getRole()}
                    </h4>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="font-weight-bold"><span class="font-weight-bold">ID:</span> ${manager.getId()}
                        </li>
                        <li class="list-group-item">
                            <span class="font-weight-bold">Email:</span><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
                        </li>
                        <li class="list-group-item">
                            <span class="font-weight-bold">Office number:</span> ${manager.getOfficeNumber()}
                        </li>
                    </ul>
                </div>
            </div>
    `;
};

const generateEngineer = engineer => {
    return `
                <div class="card m-5 shadow p-0" style="width:300px">
                    <div class="card-header bg-dark text-white">
                        <h3>${engineer.getName()}</h3>
                        <h4>
                            <i class="fas fa-glasses pr-3"></i>${engineer.getRole()}
                        </h4>
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <span class="font-weight-bold">ID:</span> ${engineer.getId()}</li>
                            <li class="list-group-item">
                                <span class="font-weight-bold">Email:</span><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
                            </li>
                            <li class="list-group-item">
                                <span class="font-weight-bold">GitHub:</span><a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a>
                            </li>
                        </ul>
                    </div>
                </div>
    `;
};

const generateIntern = intern => {
    return `
                <div class="card m-5 shadow p-0" style="width:300px">
                    <div class="card-header bg-dark text-white">
                        <h3>${intern.getName()}</h3>
                        <h4>
                        <i class="fas fa-user-graduate pr-3"></i>${intern.getRole()}
                        </h4>
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <span class="font-weight-bold">ID:</span> ${intern.getId()}</li>
                            <li class="list-group-item">
                                <span class="font-weight-bold">Email:</span><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
                            </li>
                            <li class="list-group-item">
                                <span class="font-weight-bold">School:</span>${intern.getSchool()}
                            </li>
                        </ul>
                    </div>
                </div>
    `;
};


module.exports = { generateManager, generateEngineer, generateIntern }