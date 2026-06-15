// Biol 40a Midterm 3 practice questions. Grounded in the Week 7-11 lecture decks,
// the LA7-LA11 lab activities, and the in-class station/case-study activities.
// Each question: { id, topic, q, options:[6], answer, explain }. answer must match one option exactly.
window.MT3_QUESTIONS = [

/* ===================== BONES (60) ===================== */

{id:"b01",topic:"bones",q:"Which of the following is NOT one of the five main functions of the skeletal system?",
 options:["Production of digestive enzymes","Support of the body","Protection of internal organs","Blood cell production (hematopoiesis)","Mineral and fat storage","Movement / leverage for muscles"],
 answer:"Production of digestive enzymes",
 explain:"The five functions are support, protection, movement, mineral & fat storage, and blood cell production. Digestive enzymes are made by the pancreas and GI tract, not bone."},

{id:"b02",topic:"bones",q:"The production of blood cells inside bone is called:",
 options:["Hematopoiesis","Ossification","Calcification","Remodeling","Resorption","Hemostasis"],
 answer:"Hematopoiesis",
 explain:"Hematopoiesis (blood cell formation) occurs in red bone marrow. Ossification = bone formation; hemostasis = stopping bleeding."},

{id:"b03",topic:"bones",q:"What is the primary role of RED bone marrow?",
 options:["Forming blood cells","Storing fat","Storing calcium crystals","Producing synovial fluid","Secreting calcitonin","Making cartilage"],
 answer:"Forming blood cells",
 explain:"Red marrow is the site of hematopoiesis. Yellow marrow stores fat."},

{id:"b04",topic:"bones",q:"Yellow bone marrow, found mainly in the medullary cavity, primarily stores:",
 options:["Fat (adipose tissue)","Blood-forming stem cells","Calcium phosphate","Collagen fibers","Synovial fluid","Cartilage"],
 answer:"Fat (adipose tissue)",
 explain:"Yellow marrow is mostly adipose (fat) tissue and fills the medullary cavity of adult long-bone shafts."},

{id:"b05",topic:"bones",q:"In adults, red bone marrow is largely restricted to the:",
 options:["Axial skeleton (sternum, ribs, vertebrae, pelvis) and epiphyses of large long bones","Shafts (diaphyses) of all long bones","Medullary cavity of the appendicular long bones","Carpals and tarsals only","Cranial sutures only","Articular cartilage of every joint"],
 answer:"Axial skeleton (sternum, ribs, vertebrae, pelvis) and epiphyses of large long bones",
 explain:"Children have red marrow in nearly all bones; in adults it retreats to the axial skeleton (pelvis, sternum, ribs, vertebrae, cranial bones, clavicles, scapulae) plus the epiphyseal ends of large long bones."},

{id:"b06",topic:"bones",q:"Which bone shape class is longer than it is wide, acts as a lever, and is the only class with a true medullary cavity?",
 options:["Long","Short","Flat","Irregular","Sesamoid","Pneumatic"],
 answer:"Long",
 explain:"Long bones (femur, humerus, phalanges, etc.) provide leverage and uniquely have a medullary cavity."},

{id:"b07",topic:"bones",q:"The carpals (wrist) and tarsals (ankle) are examples of which bone shape class?",
 options:["Short","Long","Flat","Irregular","Sesamoid","Sutural"],
 answer:"Short",
 explain:"Short bones are cube-like (roughly equal length, width, thickness) and provide stability with some motion — e.g., carpals and tarsals."},

{id:"b08",topic:"bones",q:"The sternum, ribs, scapulae, and cranial bones are classified as:",
 options:["Flat bones","Long bones","Short bones","Irregular bones","Sesamoid bones","Pneumatic bones"],
 answer:"Flat bones",
 explain:"Flat bones are thin and curved; they protect organs and provide broad surfaces for muscle attachment."},

{id:"b09",topic:"bones",q:"Vertebrae and facial bones, which have complex shapes, are classified as:",
 options:["Irregular bones","Long bones","Short bones","Flat bones","Sesamoid bones","Sutural bones"],
 answer:"Irregular bones",
 explain:"Irregular bones (vertebrae, facial bones, sacrum) have complex shapes that often protect organs."},

{id:"b10",topic:"bones",q:"The patella (kneecap), which is embedded within a tendon and lacks a periosteum, is the classic example of which bone class?",
 options:["Sesamoid","Short","Flat","Long","Irregular","Sutural"],
 answer:"Sesamoid",
 explain:"Sesamoid bones are small, round bones embedded in tendons (no periosteum) that protect the tendon from compression — the patella is the prime example."},

{id:"b11",topic:"bones",q:"Which structure is found ONLY in long bones (not in short, flat, or irregular bones)?",
 options:["A medullary cavity","A periosteum","Osteons","Lacunae","Canaliculi","Red marrow"],
 answer:"A medullary cavity",
 explain:"Only long bones have a true medullary cavity. Periosteum, osteons, lacunae, canaliculi and marrow occur in other bone classes too."},

{id:"b12",topic:"bones",q:"The shaft of a long bone is called the:",
 options:["Diaphysis","Epiphysis","Metaphysis","Periosteum","Endosteum","Apophysis"],
 answer:"Diaphysis",
 explain:"The diaphysis is the tubular shaft; it surrounds the medullary cavity."},

{id:"b13",topic:"bones",q:"The expanded ends of a long bone are the:",
 options:["Epiphyses","Diaphysis","Metaphyses","Periosteum","Foramina","Trabeculae"],
 answer:"Epiphyses",
 explain:"The epiphyses are the proximal and distal ends, covered by articular cartilage and containing spongy bone/red marrow."},

{id:"b14",topic:"bones",q:"The region between the diaphysis and epiphysis that contains the growth (epiphyseal) plate is the:",
 options:["Metaphysis","Diaphysis","Periosteum","Medullary cavity","Endosteum","Central canal"],
 answer:"Metaphysis",
 explain:"The metaphysis sits between shaft and end and houses the epiphyseal plate in growing bones."},

{id:"b15",topic:"bones",q:"The hollow space within the diaphysis that contains yellow marrow in adults is the:",
 options:["Medullary cavity","Central canal","Lacuna","Joint cavity","Epiphyseal line","Nutrient foramen"],
 answer:"Medullary cavity",
 explain:"The medullary (marrow) cavity is the hollow center of the diaphysis, lined by endosteum and filled with yellow marrow in adults."},

{id:"b16",topic:"bones",q:"The connective-tissue membrane covering the OUTER surface of a bone (except at joint surfaces) is the:",
 options:["Periosteum","Endosteum","Perichondrium","Synovial membrane","Articular cartilage","Epimysium"],
 answer:"Periosteum",
 explain:"The periosteum covers the outer bone surface and contains osteogenic cells, blood vessels, and nerves important for growth and repair."},

{id:"b17",topic:"bones",q:"The thin membrane that LINES the medullary cavity and internal bone surfaces is the:",
 options:["Endosteum","Periosteum","Synovial membrane","Articular cartilage","Fibrous capsule","Perimysium"],
 answer:"Endosteum",
 explain:"The endosteum lines internal surfaces (medullary cavity, trabeculae) and contains osteoblasts and osteoclasts."},

{id:"b18",topic:"bones",q:"The smooth hyaline cartilage covering the epiphyses at joint surfaces is called:",
 options:["Articular cartilage","Periosteum","Epiphyseal plate","A meniscus","Endosteum","Fibrocartilage pad"],
 answer:"Articular cartilage",
 explain:"Articular (hyaline) cartilage caps the epiphyses, reducing friction and absorbing shock at synovial joints."},

{id:"b19",topic:"bones",q:"In an adult bone that has finished growing, the remnant of the epiphyseal plate is the:",
 options:["Epiphyseal line","Epiphyseal plate","Metaphysis","Nutrient foramen","Central canal","Perforating fibers"],
 answer:"Epiphyseal line",
 explain:"When longitudinal growth stops, the cartilaginous epiphyseal plate ossifies into the bony epiphyseal line."},

{id:"b20",topic:"bones",q:"Tendons connect:",
 options:["Muscle to bone","Bone to bone","Bone to cartilage","Muscle to muscle","Skin to muscle","Cartilage to cartilage"],
 answer:"Muscle to bone",
 explain:"Tendons attach muscle to bone; ligaments attach bone to bone. Both are dense regular connective tissue."},

{id:"b21",topic:"bones",q:"Ligaments connect:",
 options:["Bone to bone","Muscle to bone","Muscle to muscle","Bone to cartilage","Skin to bone","Tendon to muscle"],
 answer:"Bone to bone",
 explain:"Ligaments join bone to bone and stabilize joints; tendons join muscle to bone."},

{id:"b22",topic:"bones",q:"Tendons and ligaments are both composed of which tissue type?",
 options:["Dense regular connective tissue","Dense irregular connective tissue","Hyaline cartilage","Fibrocartilage","Areolar connective tissue","Osseous tissue"],
 answer:"Dense regular connective tissue",
 explain:"Both are dense regular connective tissue (parallel collagen bundles). They differ only in what they connect — a classic exam trap."},

{id:"b23",topic:"bones",q:"Why is a bone considered an ORGAN rather than a single tissue?",
 options:["It is made of several tissue types (osseous, cartilage, blood, nervous, etc.)","It is composed of only osteocytes","It is a type of dense regular connective tissue","It contains a single cell type","It is part of the muscular system","It lacks blood vessels"],
 answer:"It is made of several tissue types (osseous, cartilage, blood, nervous, etc.)",
 explain:"A bone contains bone tissue, cartilage, blood, nervous tissue, and vessels — multiple tissues working together makes it an organ."},

{id:"b24",topic:"bones",q:"The INORGANIC component of bone matrix, which gives bone its hardness, is mainly:",
 options:["Hydroxyapatite (calcium phosphate / calcium carbonate)","Collagen fibers","Elastin","Chondroitin sulfate","Keratin","Glycogen"],
 answer:"Hydroxyapatite (calcium phosphate / calcium carbonate)",
 explain:"Hydroxyapatite mineral crystals (~65% of matrix) make bone hard and able to resist compression."},

{id:"b25",topic:"bones",q:"The ORGANIC component of bone matrix, which gives bone flexibility and tensile strength, is mainly:",
 options:["Collagen fibers","Hydroxyapatite","Calcium phosphate","Mineral salts","Keratin","Calcium carbonate"],
 answer:"Collagen fibers",
 explain:"Collagen (~35% of matrix) provides flexibility and tensile strength so bone is strong but not brittle."},

{id:"b26",topic:"bones",q:"Approximately what is the make-up of bone matrix by composition?",
 options:["~35% organic, ~65% inorganic","~65% organic, ~35% inorganic","~50% organic, ~50% inorganic","~10% organic, ~90% inorganic","~90% organic, ~10% inorganic","100% inorganic"],
 answer:"~35% organic, ~65% inorganic",
 explain:"Roughly one-third organic (collagen) and two-thirds inorganic (hydroxyapatite), giving the strength-plus-flexibility composite."},

{id:"b27",topic:"bones",q:"If a bone is DEMINERALIZED (minerals removed but collagen left intact), it will:",
 options:["Bend without breaking (become rubbery/flexible)","Become brittle and shatter","Turn into cartilage","Become harder","Dissolve completely","Grow longer"],
 answer:"Bend without breaking (become rubbery/flexible)",
 explain:"Without minerals, only flexible collagen remains, so the bone bends. This shows minerals (hydroxyapatite) provide hardness."},

{id:"b28",topic:"bones",q:"If the COLLAGEN is removed from bone (leaving only mineral), the bone becomes:",
 options:["Brittle and breaks easily","Flexible and rubbery","Stronger and tougher","Elastic","Unchanged","Soft and bendable"],
 answer:"Brittle and breaks easily",
 explain:"Without collagen's flexibility, the mineral-only bone is brittle and shatters — collagen normally provides tensile strength."},

{id:"b29",topic:"bones",q:"Which bone cell BUILDS (deposits) new bone matrix?",
 options:["Osteoblast","Osteoclast","Osteocyte","Osteogenic cell","Chondroblast","Fibroblast"],
 answer:"Osteoblast",
 explain:"Osteoblasts (B = Build) secrete osteoid and deposit new bone matrix; they reside in periosteum and endosteum."},

{id:"b30",topic:"bones",q:"Which bone cell BREAKS DOWN (resorbs) bone matrix and releases calcium into the blood?",
 options:["Osteoclast","Osteoblast","Osteocyte","Osteogenic cell","Chondrocyte","Fibroblast"],
 answer:"Osteoclast",
 explain:"Osteoclasts (C = Carve/Chew) resorb bone and free calcium from hydroxyapatite."},

{id:"b31",topic:"bones",q:"Which MATURE bone cell sits in a lacuna, maintains the matrix, and senses mechanical stress to regulate remodeling?",
 options:["Osteocyte","Osteoblast","Osteoclast","Osteogenic cell","Chondrocyte","Adipocyte"],
 answer:"Osteocyte",
 explain:"Osteocytes are mature bone cells trapped in lacunae; they monitor stress/strain and direct the activity of osteoblasts and osteoclasts."},

{id:"b32",topic:"bones",q:"Which bone cell is the dividing STEM cell that gives rise to osteoblasts?",
 options:["Osteogenic (osteoprogenitor) cell","Osteoclast","Osteocyte","Chondrocyte","Fibroblast","Megakaryocyte"],
 answer:"Osteogenic (osteoprogenitor) cell",
 explain:"Osteogenic cells are the dividing stem cells (in periosteum/endosteum) that differentiate into osteoblasts (then osteocytes)."},

{id:"b33",topic:"bones",q:"Unlike the other bone cells, the osteoclast is derived from:",
 options:["White blood cells (fused monocyte lineage)","Osteogenic stem cells","Chondrocytes","Fibroblasts","Red blood cells","Mesenchymal osteoblasts"],
 answer:"White blood cells (fused monocyte lineage)",
 explain:"Osteoblasts, osteocytes, and osteogenic cells share one lineage; osteoclasts are large multinucleated cells from fused white blood cells (monocyte/macrophage line)."},

{id:"b34",topic:"bones",q:"Dense, strong COMPACT bone is found mainly in which part of a long bone?",
 options:["The diaphysis (shaft) and just under the periosteum","The epiphyses only","Between the trabeculae","The medullary cavity","The growth plate","The red marrow spaces"],
 answer:"The diaphysis (shaft) and just under the periosteum",
 explain:"Compact bone forms the dense shaft wall and the outer shell of all bones, resisting compression, bending, and twisting."},

{id:"b35",topic:"bones",q:"Spongy (cancellous) bone, made of trabeculae and housing red marrow, is found mainly in the:",
 options:["Epiphyses and metaphyses","Diaphysis shaft wall","Periosteum","Central canals","Center of the medullary cavity","Articular cartilage"],
 answer:"Epiphyses and metaphyses",
 explain:"Spongy bone fills the epiphyses/metaphyses; its trabeculae align along stress lines and the spaces hold red marrow."},

{id:"b36",topic:"bones",q:"Which statement about SPONGY bone is correct?",
 options:["It is made of trabeculae and lacks osteons and central canals","It forms the dense diaphysis wall","It contains tightly packed osteons","It has no osteocytes","It is found only under the periosteum","It contains only yellow marrow"],
 answer:"It is made of trabeculae and lacks osteons and central canals",
 explain:"Spongy bone is a lattice of trabeculae (with osteocytes in lacunae) but, unlike compact bone, has no osteons or central canals."},

{id:"b37",topic:"bones",q:"The structural unit of COMPACT bone is the:",
 options:["Osteon (Haversian system)","Trabecula","Sarcomere","Lamella","Lacuna","Fascicle"],
 answer:"Osteon (Haversian system)",
 explain:"Compact bone is built of osteons — concentric lamellae of matrix surrounding a central canal."},

{id:"b38",topic:"bones",q:"Blood vessels and nerves run lengthwise through the center of each osteon within the:",
 options:["Central (Haversian) canal","Perforating (Volkmann's) canal","Canaliculi","Lacuna","Medullary cavity","Nutrient foramen"],
 answer:"Central (Haversian) canal",
 explain:"The central (Haversian) canal lies at the core of the osteon and carries blood vessels, lymphatics, and nerves."},

{id:"b39",topic:"bones",q:"Which canals run PERPENDICULAR to osteons, connecting central canals to the periosteum and endosteum?",
 options:["Perforating (Volkmann's) canals","Central (Haversian) canals","Canaliculi","Lacunae","Lamellae","Foramina"],
 answer:"Perforating (Volkmann's) canals",
 explain:"Perforating (Volkmann's) canals run crosswise, linking central canals to each other and to the bone surfaces."},

{id:"b40",topic:"bones",q:"The concentric rings of calcified matrix surrounding the central canal of an osteon are called:",
 options:["Lamellae","Lacunae","Canaliculi","Trabeculae","Osteons","Foramina"],
 answer:"Lamellae",
 explain:"Lamellae are the layered rings of matrix; collagen runs in alternating directions between layers to resist twisting."},

{id:"b41",topic:"bones",q:"The small spaces (\"little lakes\") within the matrix where osteocytes reside are the:",
 options:["Lacunae","Canaliculi","Central canals","Lamellae","Trabeculae","Foramina"],
 answer:"Lacunae",
 explain:"Lacunae are the tiny cavities that house osteocytes; the name means 'little lakes.'"},

{id:"b42",topic:"bones",q:"The tiny channels that connect lacunae to one another, allowing nutrient and waste exchange between osteocytes, are the:",
 options:["Canaliculi","Central canals","Perforating canals","Lacunae","Lamellae","Sinusoids"],
 answer:"Canaliculi",
 explain:"Canaliculi are hair-like channels linking lacunae so osteocytes can exchange nutrients and wastes."},

{id:"b43",topic:"bones",q:"Intramembranous ossification forms bone directly from mesenchyme (within a fibrous membrane). Which bones form this way?",
 options:["Flat bones of the skull and the clavicles","All long bones","The femur and tibia","The vertebrae","The carpals and tarsals","The sacrum"],
 answer:"Flat bones of the skull and the clavicles",
 explain:"Intramembranous ossification (no cartilage template) builds the flat skull bones and the clavicles."},

{id:"b44",topic:"bones",q:"Endochondral ossification builds bone using which template?",
 options:["A hyaline cartilage model","A fibrous membrane","A fibrocartilage model","An elastic cartilage model","A tendon","Bone marrow"],
 answer:"A hyaline cartilage model",
 explain:"In endochondral ossification, a hyaline cartilage model is gradually replaced by bone."},

{id:"b45",topic:"bones",q:"Most bones of the body, including all long bones, are formed by:",
 options:["Endochondral ossification","Intramembranous ossification","Appositional growth only","Calcification of tendons","Fibrous ossification","Direct crystal deposition"],
 answer:"Endochondral ossification",
 explain:"Endochondral ossification (cartilage → bone) forms most of the skeleton, including all long bones."},

{id:"b46",topic:"bones",q:"A long bone grows in LENGTH at the:",
 options:["Epiphyseal (growth) plate","Periosteum","Medullary cavity","Central canal","Articular surface","Nutrient foramen"],
 answer:"Epiphyseal (growth) plate",
 explain:"Interstitial (lengthwise) growth occurs at the epiphyseal plate via continued endochondral ossification."},

{id:"b47",topic:"bones",q:"Appositional growth increases a bone's THICKNESS (width). How?",
 options:["Osteoblasts add bone beneath the periosteum while osteoclasts widen the medullary cavity","Chondrocytes divide at the growth plate","Hydroxyapatite crystals expand","Collagen fibers lengthen","Osteoclasts add bone to the outside","Cartilage grows from the inside out"],
 answer:"Osteoblasts add bone beneath the periosteum while osteoclasts widen the medullary cavity",
 explain:"In appositional growth, osteoblasts lay new bone on the outer surface while osteoclasts resorb the inner surface, so the bone gets wider yet stays relatively light."},

{id:"b48",topic:"bones",q:"In the epiphyseal plate, which zone is where chondrocytes rapidly divide to drive bone lengthening?",
 options:["Zone of proliferation","Zone of reserve (resting) cartilage","Zone of hypertrophy/maturation","Zone of calcification","Zone of ossification","Zone of resorption"],
 answer:"Zone of proliferation",
 explain:"In the proliferation zone, chondrocytes divide and stack in columns, pushing the epiphysis away and lengthening the bone."},

{id:"b49",topic:"bones",q:"When blood calcium is too LOW, which hormone is released to RAISE it?",
 options:["Parathyroid hormone (PTH)","Calcitonin","Thyroxine (T4)","Insulin","Growth hormone","Aldosterone"],
 answer:"Parathyroid hormone (PTH)",
 explain:"PTH raises low blood calcium by increasing bone resorption, kidney calcium reabsorption, and (via vitamin D) intestinal absorption."},

{id:"b50",topic:"bones",q:"Parathyroid hormone (PTH) is secreted by the:",
 options:["Parathyroid glands","Thyroid gland","Pituitary gland","Adrenal glands","Pancreas","Pineal gland"],
 answer:"Parathyroid glands",
 explain:"PTH comes from the parathyroid glands (on the back of the thyroid) and raises blood calcium."},

{id:"b51",topic:"bones",q:"Calcitonin, which LOWERS blood calcium, is secreted by the:",
 options:["Thyroid gland","Parathyroid glands","Pituitary gland","Adrenal glands","Liver","Kidneys"],
 answer:"Thyroid gland",
 explain:"Calcitonin from the thyroid lowers blood calcium (think 'calci-tone-down'). PTH from the parathyroid raises it."},

{id:"b52",topic:"bones",q:"To RAISE blood calcium, PTH acts on bone by:",
 options:["Increasing osteoclast activity to release calcium into the blood","Increasing osteoblast deposition of calcium into bone","Stopping all bone remodeling","Building extra collagen matrix","Converting bone to cartilage","Reducing kidney calcium reabsorption"],
 answer:"Increasing osteoclast activity to release calcium into the blood",
 explain:"PTH stimulates osteoclasts to resorb bone, freeing stored calcium into the bloodstream."},

{id:"b53",topic:"bones",q:"Active vitamin D (calcitriol) helps raise blood calcium mainly by:",
 options:["Increasing calcium absorption from food in the intestines","Blocking osteoclasts","Increasing urinary calcium loss","Stimulating the thyroid","Forming hydroxyapatite directly","Inhibiting PTH"],
 answer:"Increasing calcium absorption from food in the intestines",
 explain:"Calcitriol's main job is boosting intestinal calcium absorption; intestinal uptake of calcium requires vitamin D."},

{id:"b54",topic:"bones",q:"Vitamin D is activated through which sequence of organs?",
 options:["Skin → liver → kidney","Liver → skin → kidney","Kidney → liver → skin","Intestine → liver → kidney","Skin → kidney → liver","Thyroid → parathyroid → kidney"],
 answer:"Skin → liver → kidney",
 explain:"UV light makes vitamin D3 in skin; the liver converts it to calcidiol; the kidney makes active calcitriol."},

{id:"b55",topic:"bones",q:"Wolff's law states that:",
 options:["Bone remodels in response to the mechanical stresses placed on it","A bone's shape is fixed at birth","Bones can only grow in length, never width","Calcium is stored only in teeth","All cartilage eventually becomes bone","Muscle size determines bone color"],
 answer:"Bone remodels in response to the mechanical stresses placed on it",
 explain:"Wolff's law: bone is dynamic — increased load makes it denser/stronger; decreased load makes it weaker."},

{id:"b56",topic:"bones",q:"Based on Wolff's law, an astronaut after months in microgravity (very low mechanical stress) would be expected to:",
 options:["Lose bone density as resorption outpaces deposition","Gain bone density","Have completely unchanged bones","Permanently grow taller","Build extra compact bone","Greatly increase osteoblast activity"],
 answer:"Lose bone density as resorption outpaces deposition",
 explain:"Reduced loading shifts the balance toward osteoclast resorption, so astronauts lose bone density — the opposite of a weight-bearing athlete."},

{id:"b57",topic:"bones",q:"A fracture line that runs straight across the bone, perpendicular to its long axis, is a ___ fracture.",
 options:["Transverse","Spiral","Comminuted","Oblique","Greenstick","Impacted"],
 answer:"Transverse",
 explain:"A transverse fracture is a straight, horizontal break across the shaft (e.g., the case-study tibia near the medial malleolus)."},

{id:"b58",topic:"bones",q:"A fracture caused by a TWISTING force, producing a corkscrew-shaped break, is a ___ fracture.",
 options:["Spiral","Transverse","Comminuted","Impacted","Greenstick","Oblique"],
 answer:"Spiral",
 explain:"Spiral fractures result from twisting/rotational forces. Comminuted = many fragments; impacted = ends driven together."},

{id:"b59",topic:"bones",q:"A fracture in which one bone fragment is driven INTO another (as in the case-study tibial plateau injury) is:",
 options:["Impacted","Greenstick","Transverse","Compound (open)","Oblique","Spiral"],
 answer:"Impacted",
 explain:"In an impacted fracture, broken ends are forced together/into each other, often from an axial load like landing from a fall."},

{id:"b60",topic:"bones",q:"In bone repair, what is the correct ORDER of the stages?",
 options:["Hematoma → soft (fibrocartilage) callus → hard (bony) callus → remodeling","Hard callus → soft callus → hematoma → remodeling","Soft callus → hematoma → remodeling → hard callus","Remodeling → hematoma → hard callus → soft callus","Hematoma → hard callus → soft callus → remodeling","Soft callus → hard callus → hematoma → remodeling"],
 answer:"Hematoma → soft (fibrocartilage) callus → hard (bony) callus → remodeling",
 explain:"A blood clot (hematoma) forms first, replaced by a fibrocartilage (soft) callus, then a bony (hard) callus, which is finally remodeled into compact bone."}
,

/* ===================== MUSCLES (60) ===================== */

{id:"m01",topic:"muscles",q:"Which of the following is NOT a function of the muscular system?",
 options:["Producing bile","Producing movement of bones","Maintaining posture and body position","Stabilizing joints","Generating body heat","Protecting organs / forming valves"],
 answer:"Producing bile",
 explain:"Muscles move bones, maintain posture, stabilize joints, generate heat, and protect organs. Bile is made by the liver."},

{id:"m02",topic:"muscles",q:"The muscle property of receiving and responding to a stimulus by generating an electrical action potential is called:",
 options:["Excitability","Contractility","Elasticity","Extensibility","Rigidity","Conductivity"],
 answer:"Excitability",
 explain:"Excitability (responsiveness) is the ability to respond to a stimulus by changing membrane charge (generating an action potential)."},

{id:"m03",topic:"muscles",q:"The ability of a muscle fiber to actively SHORTEN and generate force is called:",
 options:["Contractility","Excitability","Elasticity","Extensibility","Plasticity","Rigidity"],
 answer:"Contractility",
 explain:"Contractility is the ability to shorten forcefully to pull on bones or other structures."},

{id:"m04",topic:"muscles",q:"The ability of a muscle to return to its original shape after being stretched or contracted (due to proteins like titin and elastin) is:",
 options:["Elasticity","Extensibility","Contractility","Excitability","Conductivity","Rigidity"],
 answer:"Elasticity",
 explain:"Elasticity is the recoil back to resting length; extensibility is the ability to be stretched without damage."},

{id:"m05",topic:"muscles",q:"Which muscle tissue is striated, VOLUNTARY, and multinucleated with peripheral nuclei?",
 options:["Skeletal muscle","Cardiac muscle","Smooth muscle","Both cardiac and smooth","All three types","None of them"],
 answer:"Skeletal muscle",
 explain:"Skeletal muscle is striated, under voluntary control, and its long cylindrical fibers have many nuclei pushed to the periphery."},

{id:"m06",topic:"muscles",q:"Which muscle tissue is found only in the heart, is striated and branched, and is joined by intercalated discs?",
 options:["Cardiac muscle","Skeletal muscle","Smooth muscle","Both skeletal and smooth","All three types","None of them"],
 answer:"Cardiac muscle",
 explain:"Cardiac muscle (heart only) has branched, striated cells with 1–2 central nuclei joined by intercalated discs for coordinated contraction."},

{id:"m07",topic:"muscles",q:"Which muscle tissue is NON-striated, involuntary, and spindle-shaped with a single central nucleus?",
 options:["Smooth muscle","Skeletal muscle","Cardiac muscle","Both cardiac and skeletal","All three types","None of them"],
 answer:"Smooth muscle",
 explain:"Smooth muscle (walls of hollow organs/vessels) is non-striated, involuntary, spindle-shaped, and has one central nucleus."},

{id:"m08",topic:"muscles",q:"Intercalated discs (containing gap junctions and desmosomes) are a unique feature of which muscle type?",
 options:["Cardiac muscle","Skeletal muscle","Smooth muscle","Skeletal and smooth","All three types","None of them"],
 answer:"Cardiac muscle",
 explain:"Intercalated discs electrically and mechanically link cardiac cells so the heart contracts as a unit. Only cardiac muscle has them."},

{id:"m09",topic:"muscles",q:"Smooth muscle is found in the walls of:",
 options:["Hollow organs and blood vessels (stomach, intestines, bladder, vessels)","The heart only","Muscles attached to bones","The diaphragm only","The tongue only","Cranial sutures"],
 answer:"Hollow organs and blood vessels (stomach, intestines, bladder, vessels)",
 explain:"Smooth muscle lines hollow organs and tubes (GI tract, bladder, uterus, blood vessels), producing slow, sustained contractions."},

{id:"m10",topic:"muscles",q:"Which TWO muscle types are striated?",
 options:["Skeletal and cardiac","Skeletal and smooth","Cardiac and smooth","All three","Smooth only","None"],
 answer:"Skeletal and cardiac",
 explain:"Skeletal and cardiac muscle both show striations (organized sarcomeres). Smooth muscle is non-striated."},

{id:"m11",topic:"muscles",q:"Skeletal and cardiac muscle are both striated. A key way cardiac muscle DIFFERS is that it is:",
 options:["Involuntary, branched, and joined by intercalated discs","Voluntary and multinucleated","Non-striated and spindle-shaped","Attached to bones","Without any nuclei","Controlled consciously"],
 answer:"Involuntary, branched, and joined by intercalated discs",
 explain:"Both are striated, but cardiac muscle is involuntary, branched, has 1–2 central nuclei, and uses intercalated discs."},

{id:"m12",topic:"muscles",q:"Cardiac and smooth muscle are similar in that both are:",
 options:["Involuntary (not under conscious control)","Striated","Multinucleated","Joined by intercalated discs","Attached to bones","Spindle-shaped"],
 answer:"Involuntary (not under conscious control)",
 explain:"Cardiac and smooth muscle are both involuntary. They differ in striations, shape, nuclei, and intercalated discs."},

{id:"m13",topic:"muscles",q:"The connective tissue layer that surrounds the ENTIRE muscle is the:",
 options:["Epimysium","Perimysium","Endomysium","Fascia","Periosteum","Sarcolemma"],
 answer:"Epimysium",
 explain:"Epimysium (epi- = upon) is the dense irregular CT wrapping the whole muscle."},

{id:"m14",topic:"muscles",q:"The connective tissue layer that surrounds a FASCICLE (a bundle of muscle fibers) is the:",
 options:["Perimysium","Epimysium","Endomysium","Periosteum","Aponeurosis","Sarcolemma"],
 answer:"Perimysium",
 explain:"Perimysium (peri- = around) wraps each fascicle and carries the nerves and vessels that supply the fibers."},

{id:"m15",topic:"muscles",q:"The thin connective tissue layer that surrounds EACH individual muscle fiber is the:",
 options:["Endomysium","Perimysium","Epimysium","Fascia","Periosteum","Sarcolemma"],
 answer:"Endomysium",
 explain:"Endomysium (endo- = within) is the delicate areolar CT around each single muscle fiber (cell)."},

{id:"m16",topic:"muscles",q:"From OUTERMOST to innermost, the three connective tissue layers of skeletal muscle are:",
 options:["Epimysium → perimysium → endomysium","Endomysium → perimysium → epimysium","Perimysium → epimysium → endomysium","Epimysium → endomysium → perimysium","Endomysium → epimysium → perimysium","Perimysium → endomysium → epimysium"],
 answer:"Epimysium → perimysium → endomysium",
 explain:"Whole muscle (epimysium) → fascicle (perimysium) → individual fiber (endomysium)."},

{id:"m17",topic:"muscles",q:"A fascicle is:",
 options:["A bundle of muscle fibers wrapped by perimysium","A single muscle cell","A bundle of myofibrils","A contractile protein","A sheet of connective tissue","The entire muscle"],
 answer:"A bundle of muscle fibers wrapped by perimysium",
 explain:"A fascicle is a group of muscle fibers bound together by perimysium; many fascicles make up a muscle."},

{id:"m18",topic:"muscles",q:"What is the correct organization of skeletal muscle from LARGEST to smallest?",
 options:["Muscle → fascicle → muscle fiber → myofibril → myofilament","Muscle → myofibril → fascicle → fiber → myofilament","Fascicle → muscle → fiber → myofilament → myofibril","Muscle fiber → fascicle → muscle → myofibril → myofilament","Myofilament → myofibril → fiber → fascicle → muscle stays the same","Muscle → fiber → fascicle → myofilament → myofibril"],
 answer:"Muscle → fascicle → muscle fiber → myofibril → myofilament",
 explain:"A whole muscle is made of fascicles, which contain muscle fibers (cells), which contain myofibrils, which are built of myofilaments (actin/myosin)."},

{id:"m19",topic:"muscles",q:"The plasma membrane of a muscle fiber is called the:",
 options:["Sarcolemma","Sarcoplasm","Sarcomere","Sarcoplasmic reticulum","Endomysium","Myofibril"],
 answer:"Sarcolemma",
 explain:"'Sarco-' = muscle; the sarcolemma is the muscle cell's plasma membrane (site of the motor end-plate)."},

{id:"m20",topic:"muscles",q:"The cytoplasm of a muscle fiber is called the:",
 options:["Sarcoplasm","Sarcolemma","Sarcomere","Sarcoplasmic reticulum","Sarcosome","Myofilament"],
 answer:"Sarcoplasm",
 explain:"The sarcoplasm is the muscle cell's cytoplasm, where calcium is released during contraction."},

{id:"m21",topic:"muscles",q:"The specialized smooth ER that stores and releases CALCIUM inside a muscle fiber is the:",
 options:["Sarcoplasmic reticulum","T-tubule","Sarcolemma","Mitochondrion","Golgi apparatus","Myofibril"],
 answer:"Sarcoplasmic reticulum",
 explain:"The sarcoplasmic reticulum (SR) stores, releases, and retrieves the calcium that controls contraction."},

{id:"m22",topic:"muscles",q:"What is the function of the T-tubules (transverse tubules)?",
 options:["Carry the action potential from the sarcolemma deep into the fiber","Store and release calcium","Produce ATP","Bind actin during contraction","Release acetylcholine","Anchor myosin at the M-line"],
 answer:"Carry the action potential from the sarcolemma deep into the fiber",
 explain:"T-tubules are inward folds of the sarcolemma that conduct the action potential into the cell so all myofibrils contract together."},

{id:"m23",topic:"muscles",q:"A 'triad' in a skeletal muscle fiber consists of:",
 options:["One T-tubule flanked by two terminal cisternae of the SR","Two T-tubules and one terminal cisterna","Three adjacent myofibrils","Actin, myosin, and troponin","A Z-disc, M-line, and H-zone","One sarcomere bordered by two Z-discs"],
 answer:"One T-tubule flanked by two terminal cisternae of the SR",
 explain:"A triad = 1 T-tubule + 2 terminal cisternae (the enlarged SR ends), the structure that couples excitation to calcium release."},

{id:"m24",topic:"muscles",q:"The functional contractile unit of a muscle fiber, defined from one Z-disc to the next Z-disc, is the:",
 options:["Sarcomere","Myofibril","Myofilament","Fascicle","Triad","Motor unit"],
 answer:"Sarcomere",
 explain:"The sarcomere (Z-disc to Z-disc) is the repeating contractile unit; its shortening produces muscle contraction."},

{id:"m25",topic:"muscles",q:"Which muscle type LACKS sarcomeres and is therefore non-striated?",
 options:["Smooth muscle","Skeletal muscle","Cardiac muscle","Both skeletal and cardiac","All three types","None of them"],
 answer:"Smooth muscle",
 explain:"Sarcomeres (and thus striations) are present in skeletal and cardiac muscle but NOT in smooth muscle."},

{id:"m26",topic:"muscles",q:"Myofibrils are built from repeating sarcomeres made of two kinds of myofilaments:",
 options:["Thick (myosin) and thin (actin) filaments","Troponin and tropomyosin","Collagen and elastin","Titin and nebulin","ATP and ADP","Calcium and sodium"],
 answer:"Thick (myosin) and thin (actin) filaments",
 explain:"The contractile myofilaments are thick (myosin) and thin (actin); their overlap creates striations and drives contraction."},

{id:"m27",topic:"muscles",q:"The THICK filament of the sarcomere is made of:",
 options:["Myosin","Actin","Troponin","Tropomyosin","Titin","Calcium"],
 answer:"Myosin",
 explain:"Myosin forms the thick filament; its heads bind actin and have ATP-binding sites."},

{id:"m28",topic:"muscles",q:"The THIN filament of the sarcomere is made mainly of:",
 options:["Actin","Myosin","Titin","Tropomyosin alone","Troponin alone","Elastin"],
 answer:"Actin",
 explain:"Actin forms the thin filament; troponin and tropomyosin are regulatory proteins attached to it."},

{id:"m29",topic:"muscles",q:"In a RESTING muscle, which regulatory protein physically BLOCKS the myosin-binding sites on actin?",
 options:["Tropomyosin","Troponin","Myosin","Titin","Actin","Calcium"],
 answer:"Tropomyosin",
 explain:"Tropomyosin is a ribbon that covers the myosin-binding sites on actin until calcium/troponin move it aside."},

{id:"m30",topic:"muscles",q:"Which thin-filament protein BINDS CALCIUM and then shifts tropomyosin off the binding sites?",
 options:["Troponin","Tropomyosin","Myosin","Actin","Titin","ATP"],
 answer:"Troponin",
 explain:"Calcium binds troponin, which changes shape and pulls tropomyosin away, exposing the myosin-binding sites."},

{id:"m31",topic:"muscles",q:"The large ELASTIC protein that anchors myosin to the Z-disc and provides the sarcomere's springiness is:",
 options:["Titin","Tropomyosin","Troponin","Actin","Collagen","Dystrophin"],
 answer:"Titin",
 explain:"Titin is a giant elastic protein running from the Z-disc to the M-line, anchoring myosin and giving elastic recoil."},

{id:"m32",topic:"muscles",q:"The myosin head contains binding sites for:",
 options:["Actin and ATP","Calcium and sodium","Troponin and tropomyosin","Titin and actin","Acetylcholine and calcium","ADP and the Z-disc"],
 answer:"Actin and ATP",
 explain:"Each myosin head has an actin-binding site and an ATP-binding site — the basis of cross-bridge cycling."},

{id:"m33",topic:"muscles",q:"The Z-disc (Z-line) functions as the:",
 options:["Boundary of each sarcomere, anchoring the thin filaments","Center of the A band","Myosin-only region","Anchor for thick filaments at the sarcomere center","Membrane surrounding the fiber","Light band itself"],
 answer:"Boundary of each sarcomere, anchoring the thin filaments",
 explain:"Z-discs mark the ends of each sarcomere and anchor actin (and titin); they are pulled together during contraction."},

{id:"m34",topic:"muscles",q:"The A band appears DARK because it contains:",
 options:["The thick (myosin) filament, including where it overlaps actin","Only thin filaments","Only the Z-disc","No filaments at all","Only calcium","Only titin"],
 answer:"The thick (myosin) filament, including where it overlaps actin",
 explain:"The A band spans the full length of the thick filament (myosin ± overlap with actin), making it the dark band."},

{id:"m35",topic:"muscles",q:"The I band appears LIGHT because it contains:",
 options:["Only thin (actin) filaments, no myosin","Only thick filaments","Overlapping actin and myosin","Only the M-line","Only titin","Stored calcium"],
 answer:"Only thin (actin) filaments, no myosin",
 explain:"The I band holds only thin filaments (bisected by the Z-disc), so it is the light band."},

{id:"m36",topic:"muscles",q:"The H zone is the central region of the sarcomere containing:",
 options:["Only thick (myosin) filaments, with no overlap","Only thin filaments","The Z-disc","Overlapping thick and thin filaments","A T-tubule","The sarcoplasmic reticulum"],
 answer:"Only thick (myosin) filaments, with no overlap",
 explain:"The H zone is the myosin-only middle of the A band where thin filaments do not reach (at rest)."},

{id:"m37",topic:"muscles",q:"The M-line of the sarcomere:",
 options:["Anchors the thick (myosin) filaments at the center of the sarcomere","Anchors thin filaments at the sarcomere boundary","Is the light band","Contains only actin","Is part of the sarcoplasmic reticulum","Carries the action potential"],
 answer:"Anchors the thick (myosin) filaments at the center of the sarcomere",
 explain:"The M-line is the central line that holds the thick filaments in place; the Z-disc anchors thin filaments at the edges."},

{id:"m38",topic:"muscles",q:"During contraction, which bands/zones SHORTEN?",
 options:["The I band and the H zone","The A band only","All bands equally","Only the A band","The Z-disc lengthens","None of them shorten"],
 answer:"The I band and the H zone",
 explain:"As filaments slide, the I band and H zone narrow while the A band stays the same width."},

{id:"m39",topic:"muscles",q:"During contraction, the A band:",
 options:["Stays the same length (equal to the thick filament)","Shortens dramatically","Lengthens","Disappears","Doubles in width","Splits in two"],
 answer:"Stays the same length (equal to the thick filament)",
 explain:"Because thick-filament length doesn't change, the A band's width is constant during contraction."},

{id:"m40",topic:"muscles",q:"According to the sliding filament theory, a muscle shortens because:",
 options:["Thin filaments slide past thick filaments, pulling the Z-discs closer (filaments don't change length)","The filaments themselves get physically shorter","Myosin dissolves","Actin filaments lengthen","The sarcolemma squeezes the cell","Sarcomeres are destroyed and rebuilt"],
 answer:"Thin filaments slide past thick filaments, pulling the Z-discs closer (filaments don't change length)",
 explain:"Filaments keep their length; the thin filaments slide inward over the thick filaments, shortening each sarcomere."},

{id:"m41",topic:"muscles",q:"The neuromuscular junction (NMJ) is best described as a:",
 options:["Chemical synapse between a motor neuron and a muscle fiber","Gap junction between two muscle cells","Direct bone-to-muscle attachment","Site of ATP synthesis","Region of the sarcoplasmic reticulum","Type of bursa"],
 answer:"Chemical synapse between a motor neuron and a muscle fiber",
 explain:"The NMJ is the chemical synapse where a motor neuron communicates with a muscle fiber using acetylcholine."},

{id:"m42",topic:"muscles",q:"The neurotransmitter released at the neuromuscular junction is:",
 options:["Acetylcholine (ACh)","Dopamine","Calcium","Sodium","GABA","Norepinephrine"],
 answer:"Acetylcholine (ACh)",
 explain:"Motor neurons release acetylcholine (ACh) into the synaptic cleft to excite the muscle fiber."},

{id:"m43",topic:"muscles",q:"The specialized region of the SARCOLEMMA that receives acetylcholine at the NMJ is the:",
 options:["Motor end-plate","Synaptic cleft","Terminal button","T-tubule","Terminal cisterna","Z-disc"],
 answer:"Motor end-plate",
 explain:"The motor end-plate is the part of the sarcolemma with ACh receptors directly across from the axon terminal."},

{id:"m44",topic:"muscles",q:"The small space between the motor neuron's terminal button and the muscle fiber is the:",
 options:["Synaptic cleft","Motor end-plate","Triad","Central canal","Muscle spindle","Sarcomere"],
 answer:"Synaptic cleft",
 explain:"The synaptic cleft is the gap that ACh diffuses across to reach receptors on the motor end-plate."},

{id:"m45",topic:"muscles",q:"A motor unit consists of:",
 options:["One motor neuron and all the muscle fibers it innervates","One muscle fiber and all its myofibrils","A single sarcomere","A fascicle and its perimysium","The neuromuscular junction by itself","The SR and T-tubules together"],
 answer:"One motor neuron and all the muscle fibers it innervates",
 explain:"A motor unit is one motor neuron plus every muscle fiber it controls; those fibers contract together."},

{id:"m46",topic:"muscles",q:"Muscles that perform very FINE, precise movements (like the muscles that move the eye) tend to have:",
 options:["Small motor units (one neuron controls only a few fibers)","Large motor units (one neuron controls many fibers)","No motor neurons","Only smooth muscle","One single giant fiber","No neuromuscular junctions"],
 answer:"Small motor units (one neuron controls only a few fibers)",
 explain:"Fewer fibers per neuron means finer control. Large, powerful muscles have large motor units (many fibers per neuron)."},

{id:"m47",topic:"muscles",q:"Which ion crosses the membrane to create the depolarization/action potential at the NMJ and along the sarcolemma?",
 options:["Sodium (Na+)","Calcium (Ca2+)","Potassium (K+)","Chloride (Cl-)","Magnesium (Mg2+)","Iron (Fe2+)"],
 answer:"Sodium (Na+)",
 explain:"Na+ rushing in causes the depolarization that forms the action potential at the motor end-plate and down the sarcolemma."},

{id:"m48",topic:"muscles",q:"Which ion is released from the sarcoplasmic reticulum to directly TRIGGER contraction by binding troponin?",
 options:["Calcium (Ca2+)","Sodium (Na+)","Potassium (K+)","Chloride (Cl-)","Magnesium (Mg2+)","Both sodium and potassium"],
 answer:"Calcium (Ca2+)",
 explain:"Calcium released from the SR binds troponin, moving tropomyosin to expose the binding sites — this lets contraction begin."},

{id:"m49",topic:"muscles",q:"After ACh binds the motor end-plate and the action potential travels down the T-tubules, the NEXT event is:",
 options:["The sarcoplasmic reticulum releases calcium into the sarcoplasm","ACh is released into the cleft","Myosin detaches from actin","The muscle relaxes","Sodium is pumped back out","Tropomyosin re-covers the binding sites"],
 answer:"The sarcoplasmic reticulum releases calcium into the sarcoplasm",
 explain:"The action potential reaching the T-tubules triggers the SR to dump calcium into the sarcoplasm, starting contraction."},

{id:"m50",topic:"muscles",q:"Calcium triggers contraction by binding to ____, which moves ____ off the actin binding sites.",
 options:["troponin; tropomyosin","tropomyosin; troponin","actin; myosin","myosin; titin","troponin; titin","tropomyosin; actin"],
 answer:"troponin; tropomyosin",
 explain:"Ca2+ binds troponin; troponin shifts tropomyosin away from the myosin-binding sites on actin."},

{id:"m51",topic:"muscles",q:"Put these contraction events in order: (1) ACh released, (2) Ca2+ released from SR, (3) action potential travels down the T-tubule, (4) Ca2+ binds troponin.",
 options:["1 → 3 → 2 → 4","1 → 2 → 3 → 4","3 → 1 → 2 → 4","2 → 1 → 3 → 4","4 → 2 → 3 → 1","1 → 4 → 2 → 3"],
 answer:"1 → 3 → 2 → 4",
 explain:"ACh is released (1), the action potential runs down the T-tubule (3), the SR releases Ca2+ (2), and Ca2+ binds troponin (4)."},

{id:"m52",topic:"muscles",q:"In the cross-bridge cycle, when a NEW ATP molecule binds the myosin head, it causes myosin to:",
 options:["Detach from actin","Cock (re-energize) into position","Trigger calcium release","Bind troponin","Form the cross-bridge","Pull the actin filament"],
 answer:"Detach from actin",
 explain:"A fresh ATP binding the myosin head breaks the cross-bridge, detaching myosin from actin (this is why ATP is needed to RELAX too)."},

{id:"m53",topic:"muscles",q:"Hydrolysis of ATP (into ADP + Pi) by the myosin head is used to:",
 options:["Cock / re-energize and reposition the myosin head","Detach myosin from actin","Release calcium from the SR","Break down actin","Cover the binding sites","Depolarize the membrane"],
 answer:"Cock / re-energize and reposition the myosin head",
 explain:"Splitting ATP energizes (cocks) the myosin head so it's ready to bind actin and perform the next power stroke."},

{id:"m54",topic:"muscles",q:"During the POWER STROKE, the myosin head pivots and:",
 options:["Pulls the thin filament toward the center of the sarcomere (releasing ADP + Pi)","Pushes actin outward","Releases acetylcholine","Pumps calcium back into the SR","Detaches immediately from actin","Lengthens the sarcomere"],
 answer:"Pulls the thin filament toward the center of the sarcomere (releasing ADP + Pi)",
 explain:"The power stroke pivots the cross-bridge, sliding the thin filament inward and releasing ADP and Pi."},

{id:"m55",topic:"muscles",q:"If calcium is ABSENT (but ATP is present), what happens in the muscle?",
 options:["No contraction — tropomyosin keeps the binding sites covered","Maximal, sustained contraction","The muscle locks in permanent contraction","Myosin tears apart the actin","ACh is released continuously","The SR ruptures"],
 answer:"No contraction — tropomyosin keeps the binding sites covered",
 explain:"Without calcium, troponin/tropomyosin keep the actin binding sites covered, so myosin cannot bind and no contraction occurs."},

{id:"m56",topic:"muscles",q:"Which energy system supplies the most IMMEDIATE ATP (but only ~15 seconds) using creatine phosphate?",
 options:["The phosphagen (creatine phosphate) system","Anaerobic glycolysis","Aerobic respiration","Beta-oxidation of fat","The electron transport chain alone","Fermentation of lactic acid"],
 answer:"The phosphagen (creatine phosphate) system",
 explain:"The phosphagen system uses stored creatine phosphate for instant but very short-lived ATP (~15 s)."},

{id:"m57",topic:"muscles",q:"Long-duration, low-to-moderate activity (such as walking) is powered mainly by:",
 options:["Aerobic respiration in the mitochondria","The phosphagen system","Anaerobic glycolysis","Creatine phosphate","Lactic acid fermentation only","ATP stored in the sarcolemma"],
 answer:"Aerobic respiration in the mitochondria",
 explain:"Sustained activity relies on aerobic respiration (oxygen + glucose/fatty acids in mitochondria) for long-term ATP."},

{id:"m58",topic:"muscles",q:"When muscles work WITHOUT enough oxygen, glycolysis produces ____, which contributes to muscle fatigue.",
 options:["Lactic acid","Creatine phosphate","Myoglobin","Glycogen","Carbon dioxide and water only","Acetylcholine"],
 answer:"Lactic acid",
 explain:"Without oxygen, the glycogen–lactic-acid system makes ATP quickly but produces lactic acid, contributing to fatigue."},

{id:"m59",topic:"muscles",q:"The role of MYOGLOBIN in muscle is to:",
 options:["Store and transport oxygen within the muscle fiber","Store glucose","Break down ATP","Bind calcium for contraction","Conduct the action potential","Build new myofibrils"],
 answer:"Store and transport oxygen within the muscle fiber",
 explain:"Myoglobin is an iron-rich protein that stores and shuttles oxygen inside muscle cells (glycogen stores glucose)."},

{id:"m60",topic:"muscles",q:"Duchenne muscular dystrophy results from a lack of dystrophin, a protein that normally:",
 options:["Anchors the myofibrils' thin filaments to the sarcolemma","Stores calcium in the SR","Releases acetylcholine","Forms intercalated discs","Breaks down lactic acid","Builds the Z-disc"],
 answer:"Anchors the myofibrils' thin filaments to the sarcolemma",
 explain:"Without dystrophin, contractions tear the sarcolemma, letting calcium flood in and progressively destroying skeletal muscle fibers."}
,

/* ===================== JOINTS (30) ===================== */

{id:"j01",topic:"joints",q:"The STRUCTURAL classification of joints is based on:",
 options:["The material that binds the bones (fibrous, cartilaginous, or synovial)","The degree of movement allowed","The number of bones involved","The size of the joint","The body region","Whether muscle is attached"],
 answer:"The material that binds the bones (fibrous, cartilaginous, or synovial)",
 explain:"Structural classification (fibrous / cartilaginous / synovial) is based on what connects the bones; functional classification is based on movement."},

{id:"j02",topic:"joints",q:"The FUNCTIONAL classification of joints is based on:",
 options:["The degree of movement the joint allows","The binding material","The shape of the bones","The location in the body","The joint's blood supply","The type of cartilage present"],
 answer:"The degree of movement the joint allows",
 explain:"Functional classes are synarthrosis (immovable), amphiarthrosis (slightly movable), and diarthrosis (freely movable)."},

{id:"j03",topic:"joints",q:"A functionally IMMOVABLE joint is called a:",
 options:["Synarthrosis","Amphiarthrosis","Diarthrosis","Synovial joint","Gomphosis","Symphysis"],
 answer:"Synarthrosis",
 explain:"Synarthrosis = immovable (e.g., a skull suture). Amphiarthrosis = slightly movable; diarthrosis = freely movable."},

{id:"j04",topic:"joints",q:"A freely movable joint is called a:",
 options:["Diarthrosis","Synarthrosis","Amphiarthrosis","Suture","Symphysis","Synostosis"],
 answer:"Diarthrosis",
 explain:"Diarthroses are freely movable — all synovial joints are diarthroses."},

{id:"j05",topic:"joints",q:"Which immovable FIBROUS joint is found between the bones of the skull?",
 options:["Suture","Symphysis","Synchondrosis","Synovial joint","Gomphosis","Syndesmosis"],
 answer:"Suture",
 explain:"Sutures are fibrous joints between skull bones, functionally synarthroses (immovable)."},

{id:"j06",topic:"joints",q:"A 'peg-in-socket' fibrous joint, such as a tooth held in its bony socket, is a:",
 options:["Gomphosis","Suture","Syndesmosis","Synchondrosis","Symphysis","Hinge joint"],
 answer:"Gomphosis",
 explain:"A gomphosis is the peg-in-socket fibrous joint anchoring each tooth in its alveolar socket."},

{id:"j07",topic:"joints",q:"A fibrous joint in which bones are joined by a ligament or interosseous membrane (e.g., between the tibia and fibula) is a:",
 options:["Syndesmosis","Suture","Gomphosis","Symphysis","Synchondrosis","Pivot joint"],
 answer:"Syndesmosis",
 explain:"A syndesmosis joins bones with a longer fibrous connection (ligament/interosseous membrane), as between the tibia–fibula or radius–ulna."},

{id:"j08",topic:"joints",q:"A CARTILAGINOUS joint united by HYALINE cartilage — such as the epiphyseal (growth) plate — is a:",
 options:["Synchondrosis","Symphysis","Suture","Syndesmosis","Gomphosis","Synovial joint"],
 answer:"Synchondrosis",
 explain:"A synchondrosis joins bones with hyaline cartilage; the epiphyseal plate is the classic example."},

{id:"j09",topic:"joints",q:"A CARTILAGINOUS joint united by FIBROCARTILAGE — such as the pubic symphysis and the intervertebral discs — is a:",
 options:["Symphysis","Synchondrosis","Suture","Gomphosis","Syndesmosis","Synovial joint"],
 answer:"Symphysis",
 explain:"A symphysis joins bones with fibrocartilage (pubic symphysis, intervertebral discs), allowing slight movement."},

{id:"j10",topic:"joints",q:"Which joint type is the only one with a fluid-filled joint cavity and is freely movable?",
 options:["Synovial","Fibrous","Cartilaginous","Suture","Symphysis","Gomphosis"],
 answer:"Synovial",
 explain:"Only synovial joints have a joint cavity filled with synovial fluid, making them freely movable (diarthroses)."},

{id:"j11",topic:"joints",q:"The articular capsule of a synovial joint has an outer fibrous layer and an inner layer that secretes synovial fluid. That inner layer is the:",
 options:["Synovial membrane","Periosteum","Articular cartilage","Fibrous membrane","Bursa","Perichondrium"],
 answer:"Synovial membrane",
 explain:"The inner synovial membrane secretes synovial fluid; the outer fibrous layer (dense irregular CT) provides strength."},

{id:"j12",topic:"joints",q:"Synovial fluid functions to:",
 options:["Lubricate the joint, reduce friction, and nourish the articular cartilage","Connect bone to bone","Form the bone matrix","Produce blood cells","Harden the cartilage","Transmit nerve signals"],
 answer:"Lubricate the joint, reduce friction, and nourish the articular cartilage",
 explain:"Synovial fluid lubricates, cuts friction, and feeds the avascular articular cartilage."},

{id:"j13",topic:"joints",q:"Which structure SECRETES synovial fluid?",
 options:["The synovial membrane","The articular cartilage","The fibrous capsule","The periosteum","The meniscus","A bursa"],
 answer:"The synovial membrane",
 explain:"The inner synovial membrane of the articular capsule produces synovial fluid."},

{id:"j14",topic:"joints",q:"The cartilage covering the ends of the bones inside a synovial joint is ____ cartilage.",
 options:["Hyaline (articular)","Fibrocartilage","Elastic","Dense regular","Calcified","Osseous"],
 answer:"Hyaline (articular)",
 explain:"Articular cartilage on bone ends is smooth hyaline cartilage; the menisci, by contrast, are fibrocartilage."},

{id:"j15",topic:"joints",q:"A surprising fact about the synovial membrane is that, even though it secretes fluid, it is actually:",
 options:["Connective tissue, NOT epithelium","A type of bone","Skeletal muscle","Epithelium","Cartilage","Nervous tissue"],
 answer:"Connective tissue, NOT epithelium",
 explain:"Unlike most secretory linings, the synovial membrane is specialized connective tissue, not an epithelium."},

{id:"j16",topic:"joints",q:"Ligaments stabilize a synovial joint. They connect ____ and are made of ____.",
 options:["bone to bone; dense regular connective tissue","muscle to bone; dense irregular connective tissue","bone to bone; hyaline cartilage","muscle to bone; dense regular connective tissue","bone to bone; fibrocartilage","muscle to muscle; areolar tissue"],
 answer:"bone to bone; dense regular connective tissue",
 explain:"Ligaments are dense regular connective tissue connecting bone to bone; tendons (same tissue) connect muscle to bone."},

{id:"j17",topic:"joints",q:"Menisci and articular discs (like those in the knee) are shock-absorbing pads made of:",
 options:["Fibrocartilage","Hyaline cartilage","Elastic cartilage","Dense regular connective tissue","Bone","Areolar tissue"],
 answer:"Fibrocartilage",
 explain:"Menisci/articular discs are tough fibrocartilage that absorb shock and improve the fit between bones."},

{id:"j18",topic:"joints",q:"A small fluid-filled sac that reduces friction between skin, tendons, and bones near a joint is a:",
 options:["Bursa","Meniscus","Tendon","Ligament","Synovial cavity","Fat pad"],
 answer:"Bursa",
 explain:"A bursa is a fluid-filled sac that cushions and reduces friction where structures rub near a joint."},

{id:"j19",topic:"joints",q:"A tendon sheath is best described as:",
 options:["An elongated bursa wrapped around a tendon","A band connecting bone to bone","A pad of fibrocartilage","The outer fibrous layer of the capsule","A type of ligament","The fluid that lubricates cartilage"],
 answer:"An elongated bursa wrapped around a tendon",
 explain:"A tendon sheath is essentially a long bursa that wraps a tendon, letting it glide smoothly across a joint."},

{id:"j20",topic:"joints",q:"Which synovial joint type allows movement in ALL THREE planes and has the greatest range of motion?",
 options:["Ball-and-socket","Hinge","Pivot","Plane (gliding)","Saddle","Condyloid"],
 answer:"Ball-and-socket",
 explain:"Ball-and-socket joints are multiaxial (flexion/extension, abduction/adduction, rotation) with the greatest ROM."},

{id:"j21",topic:"joints",q:"The shoulder and the hip are examples of which type of synovial joint?",
 options:["Ball-and-socket","Hinge","Pivot","Saddle","Plane (gliding)","Condyloid"],
 answer:"Ball-and-socket",
 explain:"The glenohumeral (shoulder) and coxofemoral (hip) joints are ball-and-socket joints."},

{id:"j22",topic:"joints",q:"A hinge joint, such as the elbow or knee, allows:",
 options:["Uniaxial movement — flexion and extension only","Rotation only","Movement in all three planes","Biaxial movement","Gliding only","No movement"],
 answer:"Uniaxial movement — flexion and extension only",
 explain:"Hinge joints are uniaxial, permitting flexion/extension in a single plane (like a door hinge)."},

{id:"j23",topic:"joints",q:"Which joint type allows only ROTATION around a single axis (e.g., the atlantoaxial joint and the proximal radioulnar joint)?",
 options:["Pivot","Hinge","Saddle","Ball-and-socket","Plane (gliding)","Condyloid"],
 answer:"Pivot",
 explain:"Pivot joints are uniaxial rotation joints — the C1–C2 'no' joint and the proximal radioulnar (pronation/supination)."},

{id:"j24",topic:"joints",q:"A plane (gliding) joint, such as the intercarpal joints of the wrist, allows:",
 options:["Short gliding/sliding movements between flat surfaces","Rotation around one axis","Flexion and extension only","Movement in all three planes with great ROM","Peg-in-socket motion","No movement at all"],
 answer:"Short gliding/sliding movements between flat surfaces",
 explain:"Plane joints have flat surfaces that slide past one another, producing small gliding movements."},

{id:"j25",topic:"joints",q:"The saddle joint at the base of the thumb (1st carpometacarpal joint) is:",
 options:["Biaxial, allowing opposition of the thumb","Uniaxial (flexion only)","Multiaxial with full rotation","Immovable","A pivot for rotation","A gliding joint only"],
 answer:"Biaxial, allowing opposition of the thumb",
 explain:"Saddle joints are biaxial; the thumb CMC joint gives humans opposable, dexterous thumb movement."},

{id:"j26",topic:"joints",q:"The condyloid (ellipsoid) joints of the knuckles (metacarpophalangeal joints) are:",
 options:["Biaxial — flexion/extension and abduction/adduction, but no rotation","Uniaxial","Multiaxial with rotation","Capable of rotation only","Immovable","Gliding only"],
 answer:"Biaxial — flexion/extension and abduction/adduction, but no rotation",
 explain:"Condyloid joints are biaxial (two planes) but do not allow rotation — you can bend and spread your fingers, not spin them."},

{id:"j27",topic:"joints",q:"In the knee, which two ligaments cross INSIDE the joint to keep the tibia from sliding forward/backward on the femur?",
 options:["The anterior and posterior cruciate ligaments (ACL and PCL)","The medial and lateral menisci","The medial and lateral collateral ligaments","The patellar and quadriceps tendons","The fibrous and synovial membranes","The suprapatellar and prepatellar bursae"],
 answer:"The anterior and posterior cruciate ligaments (ACL and PCL)",
 explain:"The ACL and PCL are intracapsular cruciate ligaments that prevent anterior/posterior sliding of the tibia."},

{id:"j28",topic:"joints",q:"A torn LIGAMENT (as in the soccer player's ACL injury) is specifically called a:",
 options:["Sprain","Strain","Tendon rupture","Fracture","Dislocation","Bursitis"],
 answer:"Sprain",
 explain:"A sprain is a torn/stretched ligament; a strain is a torn muscle; a tendon rupture is a torn tendon."},

{id:"j29",topic:"joints",q:"Inflammation of a bursa, causing pain and swelling (often from overuse or pressure), is called:",
 options:["Bursitis","Arthritis","Tendinitis","A sprain","A strain","A dislocation"],
 answer:"Bursitis",
 explain:"The suffix '-itis' = inflammation; bursitis is inflammation of a bursa (e.g., at the elbow, shoulder, knee, or hip)."},

{id:"j30",topic:"joints",q:"Osteoarthritis is best described as:",
 options:["Wear-and-tear degeneration of the articular cartilage","An autoimmune attack on muscle","Inflammation of a bursa","A torn ligament","A bacterial infection of bone","Loss of only the synovial membrane"],
 answer:"Wear-and-tear degeneration of the articular cartilage",
 explain:"Osteoarthritis is the 'wear-and-tear' breakdown of articular cartilage with age/use, exposing bone and causing pain."}

];

