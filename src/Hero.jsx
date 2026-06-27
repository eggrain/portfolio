export default function Hero() {
    const projects = [
        {
            name: "todolist",
            url: "https://todolist.eggrain.net",
            description: <>
                A Razor Pages planning and todo list app built with ASP.NET Core Identity,
                Entity Framework Core, SQLite, Bootstrap, and Sass.
            </>,
            links: [
                ["Explanation of a Program.cs file", "https://eggrain.github.io/programcs"]
            ]
        },
        {
            name: "lilgobguides",
            url: "https://oldschool.eggrain.net",
            description: <>
                An Old School RuneScape guide site built with Razor Pages, including
                file uploads, rich text editing, CI/CD, Identity, and EF Core.
            </>,
            links: [
                ["File uploads in lilgobguides (Razor Pages)", "https://eggrain.github.io/file-uploads-lilgobguides"],
                ["Notes on lilgobguides build and CI/CD (Razor Pages)", "https://eggrain.github.io/lilgobguides-build-and-cicd-notes"],
                ["Razor Pages file upload model binding with EF Core", "https://eggrain.github.io/img-upload-for-card-header"],
                ["Initial work integrating Trix editor into Razor Pages", "https://eggrain.github.io/initial-trix-editor-razor-pages"],
                ["How to seed an ASP.NET Core Identity user", "https://eggrain.github.io/how-to-seed-an-asp-net-core-identity-user"]
            ]
        },
        {
            name: "eggrain.github.io",
            url: "https://eggrain.github.io",
            description: <>
                My software development blog, where I write about ASP.NET Core, Razor Pages, infrastructure, deployment, and side projects.
            </>
        }
    ];

    const undeployedProjects = [
        {
            name: "Larder",
            description: <>
                A recipe and cooking app I worked on exploring ASP.NET Core architecture, integration & unit testing, repositories, services, and EF Core.
            </>,
            links: [
                ["Initial work on an ASP.NET Core integration tests project", "https://eggrain.github.io/aspnetcoreintegrationtesting"],
                ["Repository unit tests in Larder", "https://eggrain.github.io/repositoryunittestsinlarder"],
                ["ICrudServiceBase<TDto, TEntity> and ICrudRepositoryBase<TEntity>", "https://eggrain.github.io/icrudservicetdotentityandicrudrepositorytentity"],
                ["Work on cooking a recipe in Larder", "https://eggrain.github.io/work-on-cooking-recipe-in-larder"],
                ["Builder Pattern in Larder (C#)", "https://eggrain.github.io/builder-pattern-in-larder"],
                ["Mixing constructor and object initialization syntax (EF Core)", "https://eggrain.github.io/ef-core-constructor-and-object-initialization-syntax"],
                ["Service Locator Pattern to provide services to an abstract base class (ASP.NET Core)", "https://eggrain.github.io/service-locator-pattern-derived-services"],
                ["Controller-service-repository architecture", "https://eggrain.github.io/comparison-of-ruby-on-rails-asp-net-core-design"],
                ["[JsonConstructor] constructor for System.Text.Json", "https://eggrain.github.io/jsonconstructor-constructor-for-system-text-json"]
            ]
        },
        {
            name: "Anki Books",
            description: <>
                A learning and Anki-related project that I used to explore Rails, Docker, Trix editor customization, Selenium, Ruby gems, and developing the Ruby gem Anki Record. 
            </>,
            links: [
                ["Setting up Anki Books for development on WSL2 Ubuntu", "https://eggrain.github.io/setting-up-development-ankibooks"],
                ["Customizing the Trix editor", "https://eggrain.github.io/customizing-the-trix-editor"],
                ["method_missing in the Anki Record gem", "https://eggrain.github.io/anki_record_method_missing"],
                ["Action View permissions error after using Docker", "https://eggrain.github.io/action_view_permissions_error_after_using_docker"],
                ["Initial thoughts on Blazor", "https://eggrain.github.io/initial-thoughts-on-blazor"],
                ["Considerations when prerendering Razor components that request data in a Blazor Web App", "https://eggrain.github.io/prerendering-razor-components-that-request-data-in-a-blazor-web-app"],
                ["What Blazor Anki Books looks like", "https://eggrain.github.io/what-ankibooks-looks-like-part-two"]
            ]
        }
    ];

    const libraries = [
        {
            name: "Anki Record",
            url: "https://rubygems.org/gems/anki_record/versions/0.4.1",
            label: "Ruby gem:",
            description: <>
                A Ruby gem for generating Anki decks programmatically.
            </>
        }
    ];

    return <section id="hero" className="d-flex justify-content-center align-items-center">
        <div className="card">
            <div className="float-end d-none d-md-block">
                <SelfieOfMe />
            </div>

            <div className="d-flex flex-wrap justify-content-center row-gap-1 column-gap-3 align-items-center">
                <HeroHeader />
            </div>

            <div>
                <div className="float-end d-md-none">
                    <SelfieOfMe />
                </div>

                <p>
                    Hi, I'm Zoe <span className="text-nowrap">(she/her)</span>. I'm an unloader/loader at UPS in Tacoma, Washington.
                </p>

                <p>
                    I write software projects mostly for myself: practical apps, little websites,
                    and things that help me learn better ways to build.
                </p>

                <p>
                    Right now, the deployed projects I am keeping online are <code>todolist</code>, <code>lilgobguides</code>, and my blog.
                </p>
            </div>

            <PortfolioSection title="Projects" items={projects} />

            <PortfolioSection title="Undeployed Projects" items={undeployedProjects} />

            <PortfolioSection title="Libraries" items={libraries} />
        </div>
    </section>;
}

function PortfolioSection({ title, items }) {
    return <div className="mt-4">
            <h2 className="mt-4 mb-3">{title}:</h2>

            <div className="d-flex flex-column gap-3">
                {items.map(item =>
                    <ProjectCard key={item.name} {...item} />
                )}
            </div>
    </div>;
}

function HeroHeader() {
    return <div className="d-flex flex-column align-items-center" style={{ rowGap: "0.5rem" }}>
        <h1 className="fs-1">
            Zoe Rain
        </h1>

        <div>
            Tacoma, Washington, USA
        </div>
    </div>;
}

function ProjectCard({ name, url = null, description, links = [], label = null }) {
    return <div className="border rounded p-3 mt-4">
        {label &&
            <div className="mb-1 text-muted">
                {label}
            </div>
        }

        <h3 className="fs-2">
            {url
                ? <a className="header-link" href={url}>{name}</a>
                : name
            }
        </h3>

        <p className="mb-2">
            {description}
        </p>

        {links.length > 0 &&
            <LinksList links={links} />
        }
    </div>;
}

function LinksList({ links }) {
    return <div>
        <div className="fw-semibold mb-1">
            Blog posts:
        </div>

        <ul className="mb-0">
            {links.map(([text, href]) =>
                <li key={href}>
                    <a href={href}>{text}</a>
                </li>
            )}
        </ul>
    </div>;
}

function SelfieOfMe() {
    return <Picture imgSrc={"standing-selfie.jpg"} text={"Me"} />;
}

function Picture({ imgSrc, text }) {
    return <figure className="flex-1" style={{ margin: 0, width: "145px" }}>
        <div className="d-flex flex-column align-items-center" style={{ position: "relative" }}>
            <img
                src={imgSrc}
                alt={text}
                style={{
                    width: "120px",
                    height: "213px",
                    borderRadius: "12px",
                    objectFit: "cover"
                }}
            />

            <figcaption>
                {text}
            </figcaption>
        </div>
    </figure>;
}