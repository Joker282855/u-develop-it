INSERT INTO parties (name, description)
VALUES
('JS Juggernauts', 'The JS Juggernauts eat, breath, and sleep JavaScript. They can build everything you could every want in JS, including a new kitchen sink.'),
('Heros of HTML', 'Want to see a mock-up turn into an actual webpage in a matter of minutes? Well, the Heros of HTML can get it done in a matter of seconds.'),
('Git Gurus', 'Need to resolve a merge conflict? The Git Gurus have your back. Nobody knows Git like these folks do.');


INSERT INTO candidates (first_name, last_name, party_id, industry_connected)
VALUES
('Ronald', 'Firbank', 1, 1),
('Virginia', 'Woolf', 1, 1),
('Piers', 'Gaveston', 1, 0),
('Charles', 'Leroi', 2, 1),
('Katherine', 'Mansfield', 2, 1),
('Dora', 'Carrington', 3, 0),
('Edward', 'Bellamy', 3, 0),
('Montague', 'Summers', 3, 1),
('Octavia', 'Butler', 3, 1),
('Unica', 'Zurn', NULL, 1);

INSERT INTO voters (first_name, last_name, email)
VALUES 
('James', 'Fraser', 'jf@goldenbough.edu'),
('Jack', 'London', 'jflondon@ualaska.edu'),
('Robert', 'Bruce', 'rbruce@scotland.net'),
('Peter', 'Greenaway', 'pgreenaway@postmodern.com'),
('Derek', 'Jarman', 'djarman@propsectcottage.net'),
('Paolo', 'Pasolini', 'ppasolino@salo.com'),
('Heathcote', 'Williams', 'hwilliams@bafta.com'),
('Sandy', 'Powell', 'spowell@oscars.com'),
('Emil', 'Zola', 'ezola@requin.com'),
('Sissy', 'Coalpits', 'scoalpits@greenaway.com'),
('Antionette', 'Carpet', 'acapet@dontloseyourhead.com'),