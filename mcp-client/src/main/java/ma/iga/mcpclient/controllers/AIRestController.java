package ma.iga.mcpclient.controllers;

import ma.iga.mcpclient.agents.AIAgent;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class AIRestController {
    private AIAgent agent;

    public AIRestController(AIAgent agent) {
        this.agent = agent;
    }

    @PostMapping("/chat")
    @ResponseBody
    public String chat(@RequestParam String query) {
        return agent.askLLM(query);
    }

}
